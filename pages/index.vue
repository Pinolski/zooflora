<template>
  <div class="website">
    <!-- Loading Screen -->
    <div v-if="isLoading" class="loading">
      <div class="loading-spinner"></div>
    </div>
    
    <!-- Main Content -->
    <div v-else class="main-content">
      <!-- Header -->
      <AppHeader />
      
      <!-- Hero Section -->
      <HeroSection />
      
      <!-- Videos Section -->
      <VideosSection />
      
      <!-- Artist Section -->
      <ArtistSection />
      
      <!-- Shows Section -->
      <ShowsSection />
      
      <!-- Contact Section -->
      <ContactSection />
      
      <!-- Circular Text (zwischen Contact und Footer) -->
          <div class="circular-text-standalone">
            <CircularText
              text="&nbsp;ZOO/FLORA&nbsp;"
              separator="&nbsp;* KÖLN * SINCE 2024 * "
              :spin-duration="20"
          on-hover="speedUp"
          class-name="circular-text-custom"
          :size="600"
          :font-size="42"
          :font-weight="900"
        />
      </div>
      
      <!-- Footer -->
      <FooterSection />
    </div>
    
    <!-- Cookie Banner -->
    <CookieBanner />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CircularText from '~/components/CircularText.vue'

// Meta tags
useHead({
  title: 'Zoo/Flora - Indie/Post-Punk Band',
  meta: [
    { name: 'description', content: 'Zoo/Flora - Moderne Indie/Post-Punk Band aus Köln. Entdecke unsere Musik, Videos und kommende Shows.' },
    { name: 'keywords', content: 'Zoo/Flora, Indie, Post-Punk, Band, Musik, Köln, Live, Shows' },
    { property: 'og:title', content: 'Zoo/Flora - Indie/Post-Punk Band' },
    { property: 'og:description', content: 'Moderne Indie/Post-Punk Band aus Köln. Entdecke unsere Musik, Videos und kommende Shows.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/zooflora-band.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Zoo/Flora - Indie/Post-Punk Band' },
    { name: 'twitter:description', content: 'Moderne Indie/Post-Punk Band aus Köln. Entdecke unsere Musik, Videos und kommende Shows.' },
    { name: 'twitter:image', content: '/zooflora-band.jpg' }
  ]
})

const isLoading = ref(true)

onMounted(async () => {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger)
  
  // Simulate loading time
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Hide loading screen
  isLoading.value = false
  
  // Initialize smooth scrolling
  initializeSmoothScrolling()
  
  // Initialize scroll animations
  initializeScrollAnimations()
  
  // Initialize page transitions
  initializePageTransitions()
})

const initializeSmoothScrolling = () => {
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('href')
      const targetElement = document.querySelector(targetId)
      
      if (targetElement) {
        gsap.to(window, {
          duration: 1.5,
          scrollTo: {
            y: targetElement,
            offsetY: 80
          },
          ease: 'power2.inOut'
        })
      }
    })
  })
}

const initializeScrollAnimations = () => {
  // Section animations werden in der Parallax-Sektion behandelt
  
  // Parallax effects - weniger aggressiv
  gsap.utils.toArray('.parallax').forEach(element => {
    gsap.to(element, {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5
      }
    })
  })
  
  // Section transition effects
  gsap.utils.toArray('.section').forEach((section, index) => {
    // Fade in effect for each section
    gsap.fromTo(section, 
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })
}

const initializePageTransitions = () => {
  // Page transition on navigation
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      // Add transition effect
      gsap.to('.main-content', {
        opacity: 0.8,
        duration: 0.3,
        yoyo: true,
        repeat: 1
      })
    })
  })
}
</script>

<style scoped>
.website {
  min-height: 100vh;
  color: #ffffff;
}

.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #181818;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loading-spinner {
  width: 60px;
  height: 60px;
  border: 3px solid #333;
  border-top: 3px solid #FFED00;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.main-content {
  opacity: 1;
  transition: opacity 0.3s ease;
  position: relative;
}

/* Global scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #181818;
}

::-webkit-scrollbar-thumb {
  background: #FFED00;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #e6d600;
}

/* Selection color */
::selection {
  background: #FFED00;
  color: #181818;
}

::-moz-selection {
  background: #FFED00;
  color: #181818;
}

/* Circular Text Standalone */
.circular-text-standalone {
  position: absolute;
  bottom: 20px;
  left: -200px;
  z-index: 0;
  opacity: 0.3;
  transition: opacity 0.3s ease;
}

.circular-text-standalone:hover {
  opacity: 0.8;
}

/* Mobile Anpassungen */
@media (max-width: 768px) and (min-width: 481px) {
  .circular-text-standalone {
    left: -124px;
    bottom: 428px;
    transform: scale(0.5);
    transform-origin: left bottom;
  }
}

@media (max-width: 480px) {
  .circular-text-standalone {
    left: 16px;
    bottom: 280px;
    transform: scale(0.6);
    transform-origin: left bottom;
  }
}

:deep(.circular-text-custom) {
  color: #ffffff !important;
}

:deep(.circular-text-custom svg) {
  color: #ffffff !important;
}

:deep(.circular-text-custom text) {
  color: #ffffff !important;
  fill: #ffffff !important;
}
</style>
