<template>
  <section id="hero" class="hero">
    <div class="hero-background" :style="{ backgroundImage: `url(${imageUrl})` }">
      <div class="hero-overlay"></div>
    </div>
    <div class="hero-background-mobile" :style="{ backgroundImage: `url(${mobileImageUrl})` }">
      <div class="hero-overlay"></div>
    </div>
    
    <div class="hero-content">
      <div class="container">
        <div class="hero-text">
          <div class="hero-logo">
            <img src="/LogoZooFlora.svg" alt="Zoo/Flora" class="logo-image" />
          </div>
          <p class="hero-subtitle">
            Indie / Post-Punk aus Köln
          </p>
          <div class="hero-buttons">
            <a href="#videos" class="btn btn-primary">Videos ansehen</a>
            <a href="mailto:booking@zooflora.de?subject=Booking-Anfrage&body=Hallo Zoo/Flora,%0D%0A%0D%0AIch interessiere mich für einen Auftritt.%0D%0A%0D%0ABitte senden Sie mir weitere Informationen zu.%0D%0A%0D%0AMit freundlichen Grüßen" class="btn btn-secondary">Book us</a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="scroll-indicator" @click="scrollToVideos">
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scroll-arrow">
        <path d="M12,3V21M9,18l3,3,3-3" stroke="#FFED00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// Use public URL with proper path
const imageUrl = '/zooflora-band.jpg'
const mobileImageUrl = '/mobile-bg-zooflora.jpg'

const scrollToVideos = () => {
  const videosSection = document.querySelector('#videos')
  if (videosSection) {
    // SOFORTIGES Scrollen - keine Verzögerung
    const targetPosition = videosSection.offsetTop - 80
    
    // Sofortiger Sprung - keine Animation, keine Verzögerung
    window.scrollTo(0, targetPosition)
  }
}


onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  
  // Hero animations
  const tl = gsap.timeline()
  
  tl.from('.hero-logo', {
    duration: 1.5,
    y: 100,
    opacity: 0,
    scale: 0.8,
    ease: 'power3.out'
  })
  .from('.hero-subtitle', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power2.out'
  }, '-=0.5')
  .from('.hero-buttons', {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power2.out'
  }, '-=0.3')
  
  // Parallax effect for desktop background
  gsap.to('.hero-background', {
    yPercent: -20,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5
    }
  })
  
  // Background fade out effect for desktop
  gsap.to('.hero-background', {
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  })
  
  // Parallax effect for mobile background
  gsap.to('.hero-background-mobile', {
    yPercent: -20,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5
    }
  })
  
  // Background fade out effect for mobile
  gsap.to('.hero-background-mobile', {
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  })
  
  // Scroll indicator animation
  gsap.to('.scroll-arrow', {
    y: 8,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut'
  })
  
  // Scroll indicator fade out when scrolling
  gsap.to('.scroll-indicator', {
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  })
})
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  z-index: -2;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  will-change: transform, opacity;
}

.hero-background-mobile {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  will-change: transform, opacity;
  display: none;
}


.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(24, 24, 24, 0.8) 0%,
    rgba(24, 24, 24, 0.4) 50%,
    rgba(24, 24, 24, 0.9) 100%
  );
  z-index: -1;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  width: 100%;
}

.hero-text {
  max-width: 800px;
  margin: 0 auto;
}

.hero-logo {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.logo-image {
  height: clamp(80px, 15vw, 200px);
  width: auto;
  filter: drop-shadow(0 0 20px rgba(255, 237, 0, 0.3));
  transition: all 0.3s ease;
  max-width: 90vw;
}

.logo-image:hover {
  filter: drop-shadow(0 0 30px rgba(255, 237, 0, 0.6));
  transform: scale(1.05);
}

.hero-subtitle {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: #cccccc;
  margin-bottom: 3rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.hero-buttons {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.scroll-indicator {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  opacity: 0.8;
  transition: all 0.3s ease;
  cursor: pointer;
}

.scroll-indicator:hover {
  opacity: 1;
  transform: translateX(-50%) scale(1.1);
}

.scroll-arrow {
  width: 50px;
  height: 50px;
  transition: all 0.3s ease;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@media (max-width: 768px) {
  .hero-background {
    display: none;
  }
  
  .hero-background-mobile {
    display: block;
    background-position: center;
    background-size: cover;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .btn {
    width: 200px;
    text-align: center;
  }
  
  .scroll-indicator {
    bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-background-mobile {
    background-position: center;
    background-size: cover;
  }
  
  .logo-image {
    height: clamp(60px, 12vw, 120px);
    max-width: 85vw;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
}
</style>
