<template>
  <div v-if="showBanner" class="cookie-banner show">
    <div class="container">
      <div class="cookie-content">
        <div class="cookie-text">
          <h4>🍪 Cookies & Datenschutz</h4>
          <p>
            Wir verwenden Cookies und Analytics, um dir die beste Erfahrung zu bieten. 
            YouTube-Videos und Matomo Analytics helfen uns, unsere Website zu verbessern.
          </p>
        </div>
        <div class="cookie-actions">
          <button @click="acceptAll" class="btn btn-primary btn-small">
            Alle akzeptieren
          </button>
          <button @click="acceptNecessary" class="btn btn-secondary btn-small">
            Nur notwendige
          </button>
          <button @click="openSettings" class="btn btn-outline btn-small">
            Einstellungen
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Cookie Settings Modal - AUSSERHALB des Containers -->
  <div v-if="showSettings" class="cookie-modal">
    <div class="modal-content">
      <div class="modal-header">
        <h3>Cookie-Einstellungen</h3>
        <button @click="closeSettings" class="modal-close">&times;</button>
      </div>
      <div class="modal-body">
        <div class="cookie-category disabled">
          <div class="category-header">
            <h4>Notwendige Cookies</h4>
            <label class="toggle">
              <input type="checkbox" checked disabled>
              <span class="slider"></span>
            </label>
          </div>
          <p>Diese Cookies sind für die Grundfunktionen der Website erforderlich.</p>
        </div>
        
        <div class="cookie-category">
          <div class="category-header">
            <h4>YouTube Videos</h4>
            <label class="toggle">
              <input type="checkbox" v-model="settings.youtube">
              <span class="slider"></span>
            </label>
          </div>
          <p>Ermöglicht das Einbetten von YouTube-Videos auf unserer Website.</p>
        </div>
        
        <div class="cookie-category">
          <div class="category-header">
            <h4>Spotify Player</h4>
            <label class="toggle">
              <input type="checkbox" v-model="settings.spotify">
              <span class="slider"></span>
            </label>
          </div>
          <p>Ermöglicht das Einbetten von Spotify-Musikplayern auf unserer Website.</p>
        </div>
        
        <div class="cookie-category">
          <div class="category-header">
            <h4>Analytics (Matomo)</h4>
            <label class="toggle">
              <input type="checkbox" v-model="settings.analytics">
              <span class="slider"></span>
            </label>
          </div>
          <p>Hilft uns zu verstehen, wie Besucher unsere Website nutzen.</p>
        </div>
      </div>
      <div class="modal-footer">
        <button @click="saveSettings" class="btn btn-primary">
          Einstellungen speichern
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showBanner = ref(false)
const showSettings = ref(false)
const settings = ref({
  youtube: true,
  spotify: true,
  analytics: true
})

const acceptAll = () => {
  localStorage.setItem('cookieConsent', JSON.stringify({
    necessary: true,
    youtube: true,
    spotify: true,
    analytics: true,
    timestamp: Date.now()
  }))
  showBanner.value = false
  initializeServices(true, true)
  
  // Dispatch event to notify other components
  window.dispatchEvent(new CustomEvent('cookieConsentUpdated'))
}

const acceptNecessary = () => {
  localStorage.setItem('cookieConsent', JSON.stringify({
    necessary: true,
    youtube: false,
    spotify: false,
    analytics: false,
    timestamp: Date.now()
  }))
  showBanner.value = false
  initializeServices(false, false)
  
  // Dispatch event to notify other components
  window.dispatchEvent(new CustomEvent('cookieConsentUpdated'))
}

const openSettings = () => {
  // Load current settings from localStorage
  const consent = localStorage.getItem('cookieConsent')
  if (consent) {
    const savedSettings = JSON.parse(consent)
    settings.value.youtube = savedSettings.youtube || false
    settings.value.spotify = savedSettings.spotify || false
    settings.value.analytics = savedSettings.analytics || false
  }
  showSettings.value = true
}

const closeSettings = () => {
  showSettings.value = false
}

const saveSettings = () => {
  localStorage.setItem('cookieConsent', JSON.stringify({
    necessary: true,
    youtube: settings.value.youtube,
    spotify: settings.value.spotify,
    analytics: settings.value.analytics,
    timestamp: Date.now()
  }))
  showBanner.value = false
  showSettings.value = false
  initializeServices(settings.value.youtube, settings.value.analytics)
  
  // Dispatch event to notify other components
  window.dispatchEvent(new CustomEvent('cookieConsentUpdated'))
}

const initializeServices = (youtube, analytics) => {
  if (youtube) {
    // Initialize YouTube iframe API
    console.log('YouTube cookies accepted')
  }
  
  if (analytics) {
    // Initialize Matomo Analytics
    console.log('Analytics cookies accepted')
    // Add your Matomo tracking code here
  }
}

onMounted(() => {
  // Check if user has already made a choice
  const consent = localStorage.getItem('cookieConsent')
  
  if (!consent) {
    // Show banner after a short delay
    setTimeout(() => {
      showBanner.value = true
    }, 2000)
  } else {
    // Load saved preferences
    const savedSettings = JSON.parse(consent)
    settings.value.youtube = savedSettings.youtube || false
    settings.value.spotify = savedSettings.spotify || false
    settings.value.analytics = savedSettings.analytics || false
    initializeServices(savedSettings.youtube, savedSettings.analytics)
  }
  
  // Listen for external requests to open cookie settings
  window.addEventListener('openCookieSettings', () => {
    showBanner.value = true
    showSettings.value = true
  })
})
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #181818;
  border-top: 2px solid #FFED00;
  padding: 1.5rem 0;
  z-index: 1000;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.cookie-banner.show {
  transform: translateY(0);
}

.cookie-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.cookie-text h4 {
  color: #FFED00;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.cookie-text p {
  color: #cccccc;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
  max-width: 500px;
}

.cookie-actions {
  display: flex;
  gap: 1rem;
  flex-shrink: 0;
}

.btn-small {
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
}

.btn-outline {
  background: transparent;
  border: 1px solid #FFED00;
  color: #FFED00;
}

.btn-outline:hover {
  background: #FFED00;
  color: #181818;
}

.cookie-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
}

.modal-content {
  background: #1a1a1a;
  border: 1px solid #FFED00;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 237, 0, 0.2);
}

.modal-header h3 {
  color: #FFED00;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  color: #FFED00;
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-body {
  padding: 1.5rem;
}

.cookie-category {
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(255, 237, 0, 0.05);
  border: 1px solid rgba(255, 237, 0, 0.2);
  border-radius: 6px;
}

.cookie-category.disabled {
  background: rgba(128, 128, 128, 0.1);
  border: 1px solid rgba(128, 128, 128, 0.3);
  opacity: 0.6;
}

.category-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.category-header h4 {
  color: #FFED00;
  font-size: 1.1rem;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.toggle {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #333;
  transition: 0.3s;
  border-radius: 24px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.3s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #FFED00;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.cookie-category p {
  color: #cccccc;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
}

.modal-footer {
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 237, 0, 0.2);
  text-align: right;
}

@media (max-width: 768px) {
  .cookie-content {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
  
  .cookie-actions {
    flex-direction: column;
    width: 100%;
  }
  
  .btn-small {
    width: 100%;
  }
  
  .modal-content {
    margin: 1rem;
  }
  
  .modal-header,
  .modal-body,
  .modal-footer {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .cookie-banner {
    padding: 1rem 0;
  }
  
  .cookie-text p {
    font-size: 0.9rem;
  }
  
  .btn-small {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
}
</style>
