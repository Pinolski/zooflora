<template>
  <section id="contact" class="contact-section section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Kontakt</h2>
        <p class="section-subtitle">Bleib in Verbindung mit ZooFlora</p>
      </div>
      
      <div class="contact-content">
        <!-- Mailing List -->
        <div class="mailing-list">
          <div class="mailing-content">
            <h3>Newsletter</h3>
            <p>
              Erhalte Updates über neue Songs, Shows und exklusive Inhalte. 
              Kein Spam, nur die wichtigsten News.
            </p>
            <form @submit.prevent="subscribeNewsletter" class="newsletter-form">
              <div class="form-group">
                <input 
                  type="email" 
                  v-model="email"
                  placeholder="Deine E-Mail Adresse"
                  required
                  class="form-input"
                />
                <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                  {{ isSubmitting ? 'Wird abonniert...' : 'Abonnieren' }}
                </button>
              </div>
              <p class="form-note">
                Mit der Anmeldung akzeptierst du unsere 
                <a href="/privacy" target="_blank" class="privacy-link">Datenschutzerklärung</a>.
              </p>
            </form>
          </div>
        </div>
        
        <!-- Contact Info -->
        <div class="contact-info">
          <div class="contact-grid">
            <!-- Booking -->
            <a href="mailto:booking@zooflora.de" class="contact-card booking">
              <div class="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
              </div>
              <h4>Booking</h4>
              <p>Interessiert an einem Auftritt?</p>
              <span class="contact-link">
                Jetzt Anfragen
              </span>
            </a>
            
            <!-- Press -->
            <a href="mailto:press@zooflora.de" class="contact-card press">
              <div class="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h4>Press-Kit</h4>
              <p>Pressefotos und Pressetexte</p>
              <span class="contact-link">
                JETZT HERUNTERLADEN
              </span>
            </a>
            
            <!-- Tech Rider -->
            <a href="mailto:info@zooflora.de" class="contact-card general">
              <div class="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
              </div>
              <h4>Stage-Rider</h4>
              <p>Technische Anforderungen für unseren Gig</p>
              <span class="contact-link">
               JETZT HERUNTERLADEN
              </span>
            </a>
          </div>
        </div>
        
        <!-- Social Media -->
        <div class="social-media">
          <h3>Folge uns</h3>
          <div class="social-links">
            <a href="https://www.instagram.com/zoo__flora/" target="_blank" rel="noopener" class="social-link">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
            <a href="https://www.youtube.com/@Zoo_Flora" target="_blank" rel="noopener" class="social-link">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>YouTube</span>
            </a>
            <a href="https://open.spotify.com/intl-de/artist/6nY7V9h3YZA38P9weK8M94?si=7g3tLLPDS8iWlh3pbOQRmw" target="_blank" rel="noopener" class="social-link">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              <span>Spotify</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const email = ref('')
const isSubmitting = ref(false)

const subscribeNewsletter = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Show success message
    alert('Erfolgreich für den Newsletter angemeldet!')
    email.value = ''
  } catch (error) {
    alert('Fehler beim Anmelden. Bitte versuche es erneut.')
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  
  // Contact cards animation
  gsap.fromTo('.contact-card', 
    {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.contact-grid',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  )
  
  // Social links animation
  gsap.fromTo('.contact-section .social-link', 
    {
      opacity: 0,
      scale: 0.8
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.social-links',
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      }
    }
  )
  
  // Newsletter form animation
  gsap.fromTo('.newsletter-form', 
    {
      opacity: 0,
      x: -50
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.mailing-list',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  )
})
</script>

<style scoped>
.contact-section {
  background: #181818;
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
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
  max-width: 600px;
  margin: 0 auto;
}

.contact-content {
  display: grid;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto;
}

.mailing-list {
  background: linear-gradient(135deg, rgba(255, 237, 0, 0.1) 0%, rgba(24, 24, 24, 0.8) 100%);
  border: 1px solid rgba(255, 237, 0, 0.3);
  border-radius: 0;
  padding: 3rem;
  text-align: center;
}

.mailing-content h3 {
  font-size: 2rem;
  color: #FFED00;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.mailing-content p {
  font-size: 1.1rem;
  color: #cccccc;
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.newsletter-form {
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-input {
  flex: 1;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 237, 0, 0.3);
  border-radius: 0;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #FFED00;
  background: rgba(255, 255, 255, 0.15);
}

.form-input::placeholder {
  color: #999999;
}

.form-note {
  font-size: 0.9rem;
  color: #999999;
  text-align: left;
}

@media (max-width: 768px) {
  .form-note {
    text-align: center;
  }
}

.privacy-link {
  color: #FFED00;
  text-decoration: none;
  transition: color 0.3s ease;
}

.privacy-link:hover {
  color: #ffffff;
}

.contact-info {
  margin: 2rem 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.contact-card {
  background: #1a1a1a;
  border: 1px solid rgba(255, 237, 0, 0.2);
  border-radius: 0;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  display: block;
  text-decoration: none;
  color: inherit;
}

.contact-card:hover {
  border-color: #FFED00;
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(255, 237, 0, 0.1);
}

.contact-icon {
  width: 60px;
  height: 60px;
  background: rgba(255, 237, 0, 0.1);
  border: 2px solid #FFED00;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: #FFED00;
}

.contact-card h4 {
  font-size: 1.3rem;
  color: #FFED00;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.contact-card p {
  color: #cccccc;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.contact-link {
  color: #FFED00;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  display: block;
}

.contact-card:hover .contact-link {
  color: #ffffff;
}

.social-media {
  text-align: center;
  position: relative;
  z-index: 20;
}

.social-media h3 {
  font-size: 1.8rem;
  color: #FFED00;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 1rem;
  border-radius: 0;
  border: 1px solid rgba(255, 237, 0, 0.2);
  min-width: 100px;
}

.social-link:hover {
  color: #FFED00;
  border-color: #FFED00;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(255, 237, 0, 0.2);
}

.social-link span {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

@media (max-width: 768px) {
  .mailing-list {
    padding: 2rem;
  }
  
  .form-group {
    flex-direction: column;
    gap: 1rem;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .social-media {
    position: relative;
    z-index: 20;
  }
  
  .social-links {
    gap: 1rem;
  }
  
  .social-link {
    min-width: 80px;
    padding: 0.8rem;
  }
}

@media (max-width: 480px) {
  .mailing-list {
    padding: 1.5rem;
  }
  
  .contact-card {
    padding: 1.5rem;
  }
  
  .social-links {
    gap: 0.5rem;
  }
  
  .social-link {
    min-width: 70px;
    padding: 0.6rem;
  }
}
</style>
