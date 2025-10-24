<template>
  <section id="shows" class="shows-section section">
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
        <h2 class="section-title">Shows</h2>
        <p class="section-subtitle">Live-Auftritte und kommende Konzerte</p>
      </div>
      
      <div class="shows-timeline">
        <!-- Upcoming Shows -->
        <div class="timeline-section">
          <h3 class="timeline-title upcoming">Kommende Shows</h3>
          <div class="timeline-events">
            <div 
              v-for="(show, index) in upcomingShows" 
              :key="show.id"
              :id="`shows-${show.id}`"
              class="show-item upcoming"
              :class="`show-${index + 1}`"
            >
              <div class="show-date">
                <span class="date-day">{{ show.date.day }}</span>
                <span class="date-month">{{ show.date.month }}</span>
                <span class="date-year">{{ show.date.year }}</span>
              </div>
              <div class="show-info">
                <h4 class="show-venue">{{ show.venue }}</h4>
                <p class="show-location">{{ show.location }}</p>
                <p class="show-time">{{ show.time }}</p>
                <div class="show-status">
                  <span class="status-badge upcoming">Kommend</span>
                </div>
              </div>
              <div class="show-actions">
                <a :href="show.ticketLink" target="_blank" rel="noopener" class="btn btn-primary btn-small">
                  Tickets
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Past Shows -->
        <div class="timeline-section">
          <h3 class="timeline-title past">Vergangene Shows</h3>
          <div class="timeline-events">
            <div 
              v-for="(show, index) in pastShows" 
              :key="show.id"
              :id="`shows-${show.id}`"
              class="show-item past"
              :class="`show-${index + 1}`"
            >
              <div class="show-date">
                <span class="date-day">{{ show.date.day }}</span>
                <span class="date-month">{{ show.date.month }}</span>
                <span class="date-year">{{ show.date.year }}</span>
              </div>
              <div class="show-info">
                <h4 class="show-venue">{{ show.venue }}</h4>
                <p class="show-location">{{ show.location }}</p>
                <p class="show-time">{{ show.time }}</p>
                <div class="show-status">
                  <span class="status-badge past">Vergangen</span>
                </div>
              </div>
              <div class="show-actions">
                <a :href="show.photosLink" target="_blank" rel="noopener" class="btn btn-secondary btn-small">
                  Fotos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div id="booking" class="shows-cta">
        <p class="booking-text">
          Interessiert an einem Auftritt?<br>Kontaktiere uns für Booking-Anfragen!
        </p>
        <a href="mailto:booking@zooflora.de?subject=Booking-Anfrage&body=Hallo Zoo/Flora,%0D%0A%0D%0AIch interessiere mich für einen Auftritt.%0D%0A%0D%0ABitte senden Sie mir weitere Informationen zu.%0D%0A%0D%0AMit freundlichen Grüßen" class="btn btn-primary">
          Booking anfragen
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Load concerts dynamically from API
const concerts = ref([])

// Load concerts on component mount
onMounted(async () => {
  try {
    // Load from API
    const response = await fetch('/api/concerts')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const result = await response.json()
    concerts.value = result
  } catch (error) {
    console.error('Error loading concerts:', error)
    // Keep empty array as fallback
    concerts.value = []
  }
  
  // Force reactivity update
  await nextTick()
  
  // Initialize GSAP after content is loaded
  gsap.registerPlugin(ScrollTrigger)
  
  // Timeline animation
  gsap.fromTo('.show-item', 
    {
      opacity: 0,
      x: -100,
      scale: 0.9
    },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.shows-timeline',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  )
  
  // Timeline section titles animation
  gsap.fromTo('.timeline-title', 
    {
      opacity: 0,
      y: 50
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.timeline-section',
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      }
    }
  )
  
  // Show item hover effects
  document.querySelectorAll('.show-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, {
        scale: 1.02,
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
  
  // Handle anchor scrolling for specific concerts
  const hash = window.location.hash
  if (hash && hash.startsWith('#shows-')) {
    const concertId = hash.replace('#shows-', '')
    
    // Wait for DOM to be ready and then scroll
    setTimeout(() => {
      const element = document.getElementById(`shows-${concertId}`)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        })
      }
    }, 1000) // Wait for GSAP animations to complete
  }
})

// Helper function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString)
  const months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
  
  return {
    day: date.getDate().toString().padStart(2, '0'),
    month: months[date.getMonth()],
    year: date.getFullYear().toString()
  }
}

// Helper function to format location
const formatLocation = (city, venue) => {
  return `${city}, Deutschland`
}

// Helper function to format time
const formatTime = (timeString) => {
  // Convert to string and handle null/undefined
  if (!timeString) return ''
  
  const timeStr = String(timeString)
  
  // If already contains "Uhr", extract time and round to 15min intervals
  if (timeStr.includes('Uhr')) {
    const cleanTime = timeStr.replace(' Uhr', '')
    return roundTo15Minutes(cleanTime) + ' Uhr'
  }
  
  // If contains colon, round to 15min intervals and add " Uhr"
  if (timeStr.includes(':')) {
    return roundTo15Minutes(timeStr) + ' Uhr'
  }
  
  // If 4 digits without colon, format as HH:MM and round
  if (timeStr.length === 4 && /^\d{4}$/.test(timeStr)) {
    const formatted = timeStr.substring(0, 2) + ':' + timeStr.substring(2)
    return roundTo15Minutes(formatted) + ' Uhr'
  }
  
  return timeStr
}

// Helper function to round time to 15-minute intervals
const roundTo15Minutes = (timeStr) => {
  if (!timeStr || !timeStr.includes(':')) return timeStr
  
  const [hours, minutes] = timeStr.split(':').map(Number)
  
  // Round minutes to nearest 15-minute interval
  const roundedMinutes = Math.round(minutes / 15) * 15
  
  // Handle hour overflow
  let finalHours = hours
  let finalMinutes = roundedMinutes
  
  if (finalMinutes >= 60) {
    finalHours += 1
    finalMinutes = 0
  }
  
  // Format with leading zeros
  return `${finalHours.toString().padStart(2, '0')}:${finalMinutes.toString().padStart(2, '0')}`
}

// Computed properties for upcoming and past shows
const upcomingShows = computed(() => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  const filtered = concerts.value
    .filter(show => {
      const showDate = new Date(show.date)
      return showDate >= today
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sortiere kommende Shows: nächste zuerst
    .map(show => ({
      id: show._id || show._path?.replace('/concerts/', ''),
      date: formatDate(show.date),
      venue: show.title,
      location: formatLocation(show.city, show.venue),
      time: formatTime(show.time),
      ticketLink: show.ticket_url || '#'
    }))
  
  return filtered
})

const pastShows = computed(() => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  const filtered = concerts.value
    .filter(show => {
      const showDate = new Date(show.date)
      return showDate < today
    })
    .map(show => ({
      id: show._id || show._path?.replace('/concerts/', ''),
      date: formatDate(show.date),
      venue: show.title,
      location: formatLocation(show.city, show.venue),
      time: formatTime(show.time),
      photosLink: show.photos_url || '#'
    }))
  
  return filtered
})
</script>

<style scoped>
.shows-section {
  position: relative;
  padding-top: 4rem;
  padding-bottom: 4rem;
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

.shows-timeline {
  max-width: 900px;
  margin: 0 auto;
}

.timeline-section {
  margin-bottom: 4rem;
}

.timeline-title {
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
}

.timeline-title.upcoming {
  color: #FFED00;
}

.timeline-title.past {
  color: #666666;
}

.timeline-events {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.show-item {
  background: #1a1a1a;
  border: 1px solid rgba(255, 237, 0, 0.2);
  border-radius: 0;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 2rem;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
}

.show-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 237, 0, 0.05) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.show-item:hover {
  border-color: #FFED00;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 237, 0, 0.1);
}

.show-item:hover::before {
  opacity: 1;
}

.show-item.upcoming {
  border-left: 4px solid #FFED00;
}

.show-item.past {
  border-left: 4px solid #666666;
  opacity: 0.8;
}

.show-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
  text-align: center;
}

.date-day {
  font-size: 2rem;
  font-weight: 700;
  color: #FFED00;
  line-height: 1;
}

.date-month {
  font-size: 0.9rem;
  color: #cccccc;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.date-year {
  font-size: 0.8rem;
  color: #999999;
}

.show-info {
  flex: 1;
}

.show-venue {
  font-size: 1.3rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.show-location {
  color: #cccccc;
  font-size: 1rem;
  margin-bottom: 0.3rem;
}

.show-time {
  color: #999999;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.show-status {
  display: flex;
  align-items: center;
}

.status-badge {
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.status-badge.upcoming {
  background: rgba(255, 237, 0, 0.2);
  color: #FFED00;
  border: 1px solid #FFED00;
}

.status-badge.past {
  background: rgba(102, 102, 102, 0.2);
  color: #666666;
  border: 1px solid #666666;
}

.show-actions {
  display: flex;
  align-items: center;
}

.btn-small {
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
}

.shows-cta {
  text-align: center;
  margin-top: 4rem;
  padding: 3rem;
}

.booking-text {
  font-size: 1.1rem;
  color: #cccccc;
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
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

.shows-section {
  position: relative;
}

.shows-section .container {
  position: relative;
  z-index: 2;
}

@media (max-width: 768px) {
  .timeline-title {
    text-align: center !important;
    justify-content: center;
    display: flex;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    align-self: center;
  }
  
  .timeline-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
  .timeline-section h3 {
    text-align: center !important;
    width: 100%;
    display: block;
  }
  
  .show-item {
    grid-template-columns: 1fr;
    gap: 1rem;
    text-align: center;
  }
  
  .show-date {
    order: -1;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }
  
  .date-day {
    font-size: 1.5rem;
  }
  
  .show-actions {
    justify-content: center;
  }
  
  .show-status {
    justify-content: center !important;
    display: flex !important;
  }
  
  .timeline-events {
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .show-item {
    padding: 1rem;
  }
  
  .show-venue {
    font-size: 1.1rem;
  }
  
  .btn-small {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
}
</style>