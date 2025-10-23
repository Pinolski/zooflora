<template>
  <div class="dot-grid-container">
    <canvas ref="canvasRef" class="dot-grid-canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let animationId = null
let dots = []
let mouse = { x: 0, y: 0 }

const props = defineProps({
  dotSize: { type: Number, default: 8 },
  gap: { type: Number, default: 32 },
  color: { type: String, default: '#FFED00' },
  opacity: { type: Number, default: 0.3 }
})

const createDots = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  
  const rect = canvas.getBoundingClientRect()
  canvas.width = rect.width
  canvas.height = rect.height
  
  const cols = Math.floor(rect.width / props.gap)
  const rows = Math.floor(rect.height / props.gap)
  
  dots = []
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      dots.push({
        x: x * props.gap + props.gap / 2,
        y: y * props.gap + props.gap / 2,
        originalX: x * props.gap + props.gap / 2,
        originalY: y * props.gap + props.gap / 2,
        vx: 0,
        vy: 0
      })
    }
  }
  
  console.log(`Created ${dots.length} dots for ${cols}x${rows} grid`)
}

const draw = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  dots.forEach(dot => {
    const dx = mouse.x - dot.x
    const dy = mouse.y - dot.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    if (distance < 120) {
      const force = (120 - distance) / 120
      const pushX = dx * force * 0.02
      const pushY = dy * force * 0.02
      dot.vx += pushX
      dot.vy += pushY
    }
    
    // Damping
    dot.vx *= 0.85
    dot.vy *= 0.85
    
    // Apply velocity
    dot.x += dot.vx
    dot.y += dot.vy
    
    // Return to original position
    const returnForce = 0.15
    dot.vx += (dot.originalX - dot.x) * returnForce
    dot.vy += (dot.originalY - dot.y) * returnForce
    
    // Draw dot
    ctx.beginPath()
    ctx.arc(dot.x, dot.y, props.dotSize / 2, 0, Math.PI * 2)
    ctx.fillStyle = props.color
    ctx.globalAlpha = props.opacity
    ctx.fill()
  })
  
  animationId = requestAnimationFrame(draw)
}

const handleMouseMove = (e) => {
  const canvas = canvasRef.value
  if (!canvas) return
  
  const rect = canvas.getBoundingClientRect()
  mouse.x = e.clientX - rect.left
  mouse.y = e.clientY - rect.top
}

const handleResize = () => {
  createDots()
}

onMounted(() => {
  setTimeout(() => {
    createDots()
    draw()
  }, 100)
  
  const canvas = canvasRef.value
  if (canvas) {
    canvas.addEventListener('mousemove', handleMouseMove)
  }
  
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  
  const canvas = canvasRef.value
  if (canvas) {
    canvas.removeEventListener('mousemove', handleMouseMove)
  }
  
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.dot-grid-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.dot-grid-canvas {
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
