<template>
  <section id="videos" class="videos-section section">
    <!-- Animated Pixel Background -->
    <div class="pixel-blast-container">
      <div class="pixel-grid">
        <div 
          v-for="i in 300" 
          :key="i" 
          class="pixel"
          :style="{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: Math.random() * 4 + 's',
            animationDuration: (3 + Math.random() * 6) + 's',
            width: (2 + Math.random() * 3) + 'px',
            height: (2 + Math.random() * 3) + 'px'
          }"
        ></div>
      </div>
    </div>
    
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Videos</h2>
        <p class="section-subtitle">Unsere neuesten Musikvideos und Live-Auftritte</p>
      </div>
      
      <!-- Cookie Consent Check -->
      <div v-if="!youtubeConsent" class="cookie-notice">
        <div class="cookie-notice-content">
          <h3>🍪 YouTube-Videos</h3>
          <p>
            Um unsere Videos anzuzeigen, müssen Sie YouTube-Cookies akzeptieren. 
            Diese ermöglichen es uns, YouTube-Videos auf unserer Website einzubetten.
          </p>
          <button @click="openCookieSettings" class="btn btn-primary">
            Cookie-Einstellungen öffnen
          </button>
        </div>
      </div>
      
      <div v-else class="videos-grid">
        <div 
          v-for="(video, index) in videos" 
          :key="video.id"
          class="video-item"
          :class="`video-${index + 1}`"
        >
          <div class="video-wrapper">
            <iframe
              :src="`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`"
              :title="video.title"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
          <div class="video-info">
            <h3 class="video-title">{{ video.title }}</h3>
            <p class="video-description">{{ video.description }}</p>
          </div>
        </div>
      </div>
      
      <div class="videos-cta">
        <a href="https://www.youtube.com/@Zoo_Flora" target="_blank" rel="noopener" class="btn btn-primary">
          Mehr Videos auf YouTube
        </a>
      </div>
      
      <!-- Spotify Player -->
      <div class="spotify-section">
        <h3 class="spotify-title">Höre Zoo/Flora auf Spotify</h3>
        
        <!-- Spotify Cookie Notice -->
        <div v-if="!spotifyConsent" class="cookie-notice spotify-notice">
          <div class="cookie-notice-content">
            <h3>🎵 Spotify Player</h3>
            <p>
              Um unseren Spotify Player anzuzeigen, müssen Sie Spotify-Cookies akzeptieren. 
              Diese ermöglichen es uns, Spotify-Musikplayer auf unserer Website einzubetten.
            </p>
            <button @click="openCookieSettings" class="btn btn-primary">
              Cookie-Einstellungen öffnen
            </button>
          </div>
        </div>
        
        <!-- Spotify Player -->
        <div v-else class="spotify-player">
          <iframe 
            data-testid="embed-iframe" 
            style="border-radius:0" 
            src="https://open.spotify.com/embed/artist/6nY7V9h3YZA38P9weK8M94?utm_source=generator" 
            width="100%" 
            height="152" 
            frameBorder="0" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const youtubeConsent = ref(false)
const spotifyConsent = ref(false)

const checkCookieConsent = () => {
  const consent = localStorage.getItem('cookieConsent')
  if (consent) {
    const settings = JSON.parse(consent)
    youtubeConsent.value = settings.youtube || false
    spotifyConsent.value = settings.spotify || false
  } else {
    youtubeConsent.value = false
    spotifyConsent.value = false
  }
}

const openCookieSettings = () => {
  // Trigger cookie banner to show settings
  const event = new CustomEvent('openCookieSettings')
  window.dispatchEvent(event)
}

const handleCookieUpdate = () => {
  checkCookieConsent()
}

const videos = [
  {
    id: 'vqj6UsGw4O8',
    title: 'Zoo/Flora - Song 1',
    description: 'Unser neuester Song mit experimentellen Klängen'
  },
  {
    id: 'Nda3dl54hrA',
    title: 'Zoo/Flora - Song 2',
    description: 'Live-Auftritt im Club mit energetischer Performance'
  },
  {
    id: 'zqePFTevOMw',
    title: 'Zoo/Flora - Song 3',
    description: 'Akustische Version unseres Hits'
  },
  {
    id: '6xZvB74ZDKs',
    title: 'Zoo/Flora - Song 4',
    description: 'Behind the Scenes vom Studio'
  },
  {
    id: 'bTs53uHStEA',
    title: 'Zoo/Flora - Song 5',
    description: 'Neuester Release mit Post-Punk Vibes'
  }
]

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  
  // Check cookie consent on mount
  checkCookieConsent()
  
  // Listen for cookie updates
  window.addEventListener('cookieConsentUpdated', handleCookieUpdate)
  
  // Stagger animation for video items
  gsap.fromTo('.video-item', 
    {
      opacity: 0,
      y: 100,
      scale: 0.8
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.videos-grid',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  )
  
  // Hover effects for video items
  document.querySelectorAll('.video-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
    
    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  })
})

onUnmounted(() => {
  window.removeEventListener('cookieConsentUpdated', handleCookieUpdate)
})
</script>

<style scoped>
.videos-section {
  background: #181818;
  position: relative;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 3;
  padding-top: 2rem;
}

.section-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: #FFED00;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  position: relative;
}


.section-subtitle {
  font-size: 1.2rem;
  color: #cccccc;
}

.cookie-notice {
  background: rgba(255, 237, 0, 0.1);
  border: 2px solid #FFED00;
  border-radius: 12px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 2rem 0;
  position: relative;
  z-index: 3;
}

.cookie-notice-content h3 {
  color: #FFED00;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.cookie-notice-content p {
  color: #cccccc;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cookie-notice .btn {
  background: #FFED00;
  color: #181818;
  padding: 0.8rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.cookie-notice .btn:hover {
  background: #e6d600;
  transform: translateY(-2px);
}

.spotify-notice {
  margin-top: 2rem;
}

.videos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.video-item {
  background: #1a1a1a;
  border: 1px solid rgba(255, 237, 0, 0.2);
  border-radius: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
}

.video-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 237, 0, 0.1) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.video-item:hover {
  border-color: #FFED00;
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(255, 237, 0, 0.2);
}

.video-item:hover::before {
  opacity: 1;
}

.video-wrapper {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.video-info {
  padding: 1.5rem;
}

.video-title {
  font-size: 1.3rem;
  color: #FFED00;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.video-description {
  color: #cccccc;
  font-size: 0.95rem;
  line-height: 1.5;
}

.videos-cta {
  text-align: center;
}

@media (max-width: 768px) {
  .videos-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .video-item {
    margin: 0 1rem;
  }
  
  .section-header {
    margin-bottom: 3rem;
  }
}

@media (max-width: 480px) {
  .videos-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .video-item {
    margin: 0;
  }
  
  .video-info {
    padding: 1rem;
  }
}

/* Spotify Player Styles */
.spotify-section {
  margin-top: 4rem;
  text-align: center;
}

.spotify-title {
  font-size: 1.8rem;
  color: #FFED00;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
}


.spotify-player {
  max-width: 800px;
  margin: 0 auto;
  background: transparent;
  border: none;
  border-radius: 0;
  padding: 1rem;
  transition: all 0.3s ease;
}


.spotify-player iframe {
  border-radius: 0;
  width: 100%;
  height: 152px;
}

.videos-section {
  position: relative;
  overflow: hidden;
}

/* Pixel Background */
.pixel-blast-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
}

.pixel-grid {
  position: relative;
  width: 100%;
  height: 100%;
}

.pixel {
  position: absolute;
  background: #FFED00;
  border-radius: 50%;
  animation: pixelFloat infinite ease-in-out;
  opacity: 0.7;
}

@keyframes pixelFloat {
  0%, 100% {
    transform: translateY(0px) scale(1);
    opacity: 0.3;
  }
  25% {
    transform: translateY(-15px) scale(1.3);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-8px) scale(0.7);
    opacity: 0.5;
  }
  75% {
    transform: translateY(-12px) scale(1.1);
    opacity: 0.9;
  }
}

.videos-section .container {
  position: relative;
  z-index: 2;
}

@media (max-width: 768px) {
  .spotify-section {
    margin-top: 3rem;
  }
  
  .spotify-title {
    font-size: 1.5rem;
  }
  
  .spotify-player {
    padding: 0.5rem;
  }
}
</style>
