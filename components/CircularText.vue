<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, withDefaults, defineProps } from 'vue'

interface CircularTextProps {
  text: string
  /** volle Umdrehung in Sekunden */
  spinDuration?: number
  /** Hover-Verhalten */
  onHover?: 'slowDown' | 'speedUp' | 'pause' | 'goBonkers'
  /** zusätzliche Klassen für den Wrapper */
  className?: string
  /** explizite Größe in px (Quadrat). Wenn weggelassen, füllt es den Parent */
  size?: number
  /** Schriftgröße in px */
  fontSize?: number
  /** Schriftstärke (z. B. 400, 700, 900 oder 'bold') */
  fontWeight?: number | string
  /** zusätzlicher Zeichenabstand in em */
  letterSpacingEm?: number
  /** Trenner zwischen Wiederholungen; Default: ein Leerzeichen */
  separator?: string
  /** z-index für den Root-Wrapper */
  zIndex?: number
}

const props = withDefaults(defineProps<CircularTextProps>(), {
  text: '',
  spinDuration: 20,
  onHover: 'speedUp',
  className: '',
  size: 450,
  fontSize: 18,
  fontWeight: 700,
  letterSpacingEm: 0,
  separator: ' ',   // wichtig: sorgt für Leerzeichen auch an der Naht
  zIndex: 0,
})

const uid = Math.random().toString(36).slice(2)

const rotation = ref(0)
const isHovering = ref(false)
let raf: number | null = null
let last = 0

const sidePx = computed(() => props.size ?? 0) // 0 => per CSS 100%

const r = computed(() => {
  const s = sidePx.value || 450
  // etwas Padding, damit Buchstaben nicht abgeschnitten werden
  return s / 2 - props.fontSize * 0.75
})

const containerStyle = computed(() => {
  return sidePx.value
    ? { width: sidePx.value + 'px', height: sidePx.value + 'px', zIndex: props.zIndex as number }
    : { width: '100%', height: '100%', zIndex: props.zIndex as number }
})

// --- Rotation / Hover-Speed ---
function baseSpeedDegPerMs() {
  return 360 / (props.spinDuration * 1000)
}

function currentSpeedDegPerMs() {
  const base = baseSpeedDegPerMs()
  if (!isHovering.value) return base
  switch (props.onHover) {
    case 'slowDown':  return base / 4
    case 'pause':     return 0
    case 'goBonkers': return base * 8
    case 'speedUp':
    default:          return base * 2
  }
}

function loop(ts: number) {
  if (!last) last = ts
  const dt = ts - last
  last = ts
  rotation.value = (rotation.value + currentSpeedDegPerMs() * dt) % 360
  raf = requestAnimationFrame(loop)
}

onMounted(() => { raf = requestAnimationFrame(loop) })
onUnmounted(() => { if (raf) cancelAnimationFrame(raf) })

// --- Text auf Umfang bringen ---
const circumference = computed(() => 2 * Math.PI * r.value)

/**
 * Wiederhole den Text so, dass der Umfang gefüllt wird.
 * - Führt einen *leading* Separator ein, damit die Naht (Ende -> Anfang) IMMER getrennt ist.
 * - xml:space=\"preserve\" im <text> verhindert Whitespace-Kollaps.
 */
const repeatedText = computed(() => {
  const base = props.text || ''
  if (!base.trim()) return ''
  const sep = props.separator ?? ' '
  const approxGlyphPx = props.fontSize * 0.58
  const needChars = Math.max(1, Math.ceil(circumference.value / approxGlyphPx))

  // leading separator sichert die Naht
  let out = sep + base
  while (out.length < needChars) out += sep + base
  return out
})

function onEnter() { isHovering.value = true }
function onLeave() { isHovering.value = false }
</script>

<template>
  <div
    :class="['relative select-none', className]"
    :style="containerStyle"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
  >
    <svg
      :viewBox="`0 0 ${sidePx || 450} ${sidePx || 450}`"
      :width="sidePx || '100%'"
      :height="sidePx || '100%'"
      role="img"
      aria-label="Rotierender Kreistest"
    >
      <defs>
        <!-- Kreisbahn exakt im Zentrum -->
        <path
          :id="`circle-${uid}`"
          :d="`
            M ${(sidePx || 450)/2}, ${(sidePx || 450)/2}
            m -${r}, 0
            a ${r},${r} 0 1,1 ${2*r},0
            a ${r},${r} 0 1,1 -${2*r},0
          `"
          fill="none"
        />
      </defs>

      <!-- Wir drehen die gesamte Textgruppe um die Mitte -->
      <g :style="{ transform: `rotate(${rotation}deg)`, transformOrigin: '50% 50%' }">
        <text
          :font-size="fontSize"
          :font-weight="fontWeight"
          dominant-baseline="middle"
          text-anchor="start"
          fill="currentColor"
          xml:space="preserve"
          :style="{ letterSpacing: letterSpacingEm + 'em' }"
        >
          <textPath
            :href="`#circle-${uid}`"
            startOffset="0%"
            lengthAdjust="spacingAndGlyphs"
            :textLength="circumference"
            method="align"
            spacing="auto"
          >{{ repeatedText }}</textPath>
        </text>
      </g>
    </svg>
  </div>
</template>

<style scoped>
/* Farbe kommt über currentColor vom Parent (z. B. .circular-text-custom { color: #fff; }) */
</style>
