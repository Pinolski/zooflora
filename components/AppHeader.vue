<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="container">
      <nav class="nav">
        <!-- Logo -->
        <div class="logo">
          <NuxtLink to="/" class="logo-link">
            <img src="/LogoZooFlora.svg" alt="Zoo/Flora" class="logo-img" />
          </NuxtLink>
        </div>

            <!-- Desktop Navigation -->
            <ul class="nav-menu" :class="{ 'nav-menu-open': isMenuOpen }">
              <!-- Mobile Avatar -->
              <div class="mobile-avatar">
                <img src="/zooflora-band.jpg" alt="Zoo/Flora Band" class="avatar-image" />
              </div>
              
              <li><a href="#videos" @click="closeMenu" class="nav-link">Videos</a></li>
              <li><a href="#artist" @click="closeMenu" class="nav-link">Artist</a></li>
              <li><a href="#shows" @click="closeMenu" class="nav-link">Shows</a></li>
              <li><a href="#contact" @click="closeMenu" class="nav-link">Kontakt</a></li>
              
              <!-- Mobile Social Icons -->
              <div class="mobile-social-icons">
                <a href="mailto:info@zooflora.de" class="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@Zoo_Flora" target="_blank" rel="noopener" class="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/zoo__flora/" target="_blank" rel="noopener" class="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://open.spotify.com/intl-de/artist/6nY7V9h3YZA38P9weK8M94?si=7g3tLLPDS8iWlh3pbOQRmw" target="_blank" rel="noopener" class="social-link">
                  <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </a>
              </div>
            </ul>

            <!-- Social Icons -->
            <div class="social-icons">
              <a href="mailto:info@zooflora.de" class="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@Zoo_Flora" target="_blank" rel="noopener" class="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/zoo__flora/" target="_blank" rel="noopener" class="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://open.spotify.com/intl-de/artist/6nY7V9h3YZA38P9weK8M94?si=7g3tLLPDS8iWlh3pbOQRmw" target="_blank" rel="noopener" class="social-link">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
            </div>

        <!-- Hamburger Menu -->
        <div class="hamburger" :class="{ 'active': isMenuOpen }" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const { $gsap } = useNuxtApp()

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  
  // Logo-Rotation basierend auf Scroll-Position
  const logoImg = document.querySelector('.logo-img')
  if (logoImg) {
    if (window.scrollY > 50) {
      // Logo um 6 Grad drehen beim Scrollen
      logoImg.style.transform = 'rotate(6deg)'
    } else {
      // Logo zurück zur ursprünglichen Position
      logoImg.style.transform = 'rotate(0deg)'
    }
  }
  
  // Mobile Navbar Hide/Show basierend auf Scroll-Richtung
  if (window.innerWidth <= 768) {
    const header = document.querySelector('.header')
    if (header) {
      if (window.scrollY > 100 && window.scrollY > (window.lastScrollY || 0)) {
        // Nach unten scrollen - Navbar verstecken
        header.style.transform = 'translateY(-100%)'
      } else {
        // Nach oben scrollen oder oben - Navbar zeigen
        header.style.transform = 'translateY(0)'
      }
      window.lastScrollY = window.scrollY
    }
  } else {
    // Desktop: Navbar immer sichtbar
    const header = document.querySelector('.header')
    if (header) {
      header.style.transform = 'translateY(0)'
    }
  }
}

const toggleMenu = async () => {
  // Nur auf Mobile-Geräten das Menü umschalten
  if (window.innerWidth <= 768) {
    isMenuOpen.value = !isMenuOpen.value
    
    await nextTick()
    
    const menuItems = document.querySelectorAll('.nav-menu li')
    
    if (isMenuOpen.value) {
      // Avatar einblenden
      const avatar = document.querySelector('.mobile-avatar')
      if (avatar) {
        $gsap.fromTo(avatar, 
          {
            scale: 0,
            opacity: 0,
            y: -30
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.2,
            ease: "back.out(1.7)"
          }
        )
      }
      
      // Menü öffnen - Animation von links nach rechts
      $gsap.fromTo(menuItems, 
        {
          x: -100,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        }
      )
      
      // Social Icons schnell einblenden
      const socialIcons = document.querySelector('.mobile-social-icons')
      if (socialIcons) {
        $gsap.fromTo(socialIcons, 
          {
            y: 20,
            opacity: 0,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: 0.3,
            ease: "power2.out"
          }
        )
        
        // Einzelne Icons schnell nacheinander einblenden
        const socialLinks = socialIcons.querySelectorAll('.social-link')
        $gsap.fromTo(socialLinks, 
          {
            y: 15,
            opacity: 0,
            scale: 0.95
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.4,
            delay: 0.5,
            stagger: 0.05,
            ease: "power2.out"
          }
        )
      }
    } else {
      // Avatar ausblenden
      const avatar = document.querySelector('.mobile-avatar')
      if (avatar) {
        $gsap.to(avatar, {
          scale: 0,
          opacity: 0,
          y: -30,
          duration: 0.3,
          ease: "power2.in"
        })
      }
      
      // Menü schließen - Animation nach links
      $gsap.to(menuItems, {
        x: -100,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.in"
      })
      
      // Social Icons schnell ausblenden
      const socialIcons = document.querySelector('.mobile-social-icons')
      if (socialIcons) {
        // Einzelne Icons schnell ausblenden
        const socialLinks = socialIcons.querySelectorAll('.social-link')
        $gsap.to(socialLinks, {
          y: 15,
          opacity: 0,
          scale: 0.95,
          duration: 0.2,
          stagger: 0.02,
          ease: "power2.in"
        })
        
        // Container schnell ausblenden
        $gsap.to(socialIcons, {
          y: 20,
          opacity: 0,
          scale: 0.9,
          duration: 0.3,
          delay: 0.1,
          ease: "power2.in"
        })
      }
    }
  }
}

const closeMenu = () => {
  // Nur auf Mobile-Geräten das Menü schließen
  if (window.innerWidth <= 768) {
    isMenuOpen.value = false
    
    nextTick(() => {
      // Avatar ausblenden
      const avatar = document.querySelector('.mobile-avatar')
      if (avatar) {
        $gsap.to(avatar, {
          scale: 0,
          opacity: 0,
          y: -30,
          duration: 0.3,
          ease: "power2.in"
        })
      }
      
      const menuItems = document.querySelectorAll('.nav-menu li')
      $gsap.to(menuItems, {
        x: -100,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.in"
      })
      
      // Social Icons schnell ausblenden
      const socialIcons = document.querySelector('.mobile-social-icons')
      if (socialIcons) {
        // Einzelne Icons schnell ausblenden
        const socialLinks = socialIcons.querySelectorAll('.social-link')
        $gsap.to(socialLinks, {
          y: 15,
          opacity: 0,
          scale: 0.95,
          duration: 0.2,
          stagger: 0.02,
          ease: "power2.in"
        })
        
        // Container schnell ausblenden
        $gsap.to(socialIcons, {
          y: 20,
          opacity: 0,
          scale: 0.9,
          duration: 0.3,
          delay: 0.1,
          ease: "power2.in"
        })
      }
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Reset menu state when resizing to desktop
  const handleResize = () => {
    if (window.innerWidth > 768) {
      isMenuOpen.value = false
      // Reset menu items to normal state
      const menuItems = document.querySelectorAll('.nav-menu li')
      $gsap.set(menuItems, {
        x: 0,
        opacity: 1
      })
    }
  }
  
  window.addEventListener('resize', handleResize)
  
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(24, 24, 24, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 237, 0, 0.2);
  z-index: 1000;
  transition: all 0.3s ease, padding 0.3s ease, transform 0.3s ease;
}

.header-scrolled {
  background: rgba(24, 24, 24, 0.98);
  border-bottom-color: #FFED00;
}

.nav {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  padding: 0.6rem 0;
  position: relative;
  width: 100%;
  transition: padding 0.3s ease;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease;
  grid-column: 1;
  justify-self: start;
}

.logo-link:hover {
  transform: scale(1.05);
}

.logo-img {
  width: 160px;
  height: 60px;
  filter: none;
  transition: all 0.3s ease, transform 0.4s ease;
}

.logo-link:hover .logo-img {
  filter: drop-shadow(0 0 20px rgba(255, 237, 0, 0.6));
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  grid-column: 2;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #FFED00;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #FFED00;
}

.nav-link:hover::after {
  width: 100%;
}

.social-icons {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  opacity: 1;
  visibility: visible;
  grid-column: 3;
  justify-self: end;
  align-self: center;
  transform: none !important;
}

.social-link {
  color: #ffffff;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  transition: all 0.3s ease;
  opacity: 1;
  visibility: visible;
  position: relative;
  z-index: 10;
  text-align: center;
  margin: 0 0.25rem;
}

.social-link:hover {
  color: #FFED00;
  transform: translateY(-2px);
}

.social-icon {
  filter: brightness(0) invert(1);
  transition: filter 0.3s ease;
}

.social-link:hover .social-icon {
  filter: brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(45deg);
}

.linktree-icon {
  filter: brightness(0) invert(1);
  transition: filter 0.3s ease;
}

.social-link:hover .linktree-icon {
  filter: brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(45deg);
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 0.5rem;
  flex-shrink: 0;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: #FFED00;
  margin: 3px 0;
  transition: 0.3s;
}

.hamburger.active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}


@media (max-width: 768px) {
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .hamburger {
    display: flex;
  }
  
  .nav-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #181818;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 999;
    grid-column: unset;
  }
  
  .nav-menu-open {
    transform: translateX(0);
  }
  
  .nav-menu li {
    opacity: 0;
    transform: translateX(-100px);
  }
  
  .nav-link {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
  
  .mobile-avatar {
    display: block;
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    z-index: 1000;
    margin-bottom: 3rem;
  }
  
  .avatar-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #FFED00;
  }
  
  .mobile-social-icons {
    display: flex;
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    gap: 2rem;
    opacity: 0;
    z-index: 1000;
  }
  
  .social-icons {
    display: none;
  }
  
  .hamburger {
    z-index: 1001;
    position: relative;
  }
  
  .social-link {
    color: #FFED00;
    transition: all 0.3s ease;
  }
  
  .social-link:hover {
    color: #fff;
    transform: scale(1.1);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

/* Desktop - Ensure social icons are visible */
@media (min-width: 769px) {
  .social-icons {
    display: flex !important;
    opacity: 1 !important;
    visibility: visible !important;
    align-items: center !important;
    justify-content: center !important;
  }
  
  .mobile-social-icons {
    display: none !important;
  }
  
  .mobile-avatar {
    display: none !important;
  }
  
  .social-link {
    display: flex !important;
    opacity: 1 !important;
    visibility: visible !important;
    align-items: center !important;
    justify-content: center !important;
    text-align: center !important;
  }
}
</style>
