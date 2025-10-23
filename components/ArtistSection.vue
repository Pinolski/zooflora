<template>
  <section id="artist" class="artist-section section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Artist</h2>
        <p class="section-subtitle">Die Menschen hinter Zoo/Flora</p>
      </div>
      
      <div class="artist-content">
        <!-- Band Biography -->
        <div class="biography">
          <div class="biography-text">
            <h3>Über Zoo/Flora</h3>
            <p>
              Zoo/Flora aus Köln wurde 2024 gegründet und bewegt sich musikalisch zwischen deutschem Indie und kantigem Postpunk. Ihr Sound ist direkt, intensiv und nahbar. Treibende Drums, verzerrte Gitarren und eingängige Hooks sorgen dafür, dass die Musik sofort mitreißt und lange nachhallt.
            </p>
            <p>
              Die Band setzt auf klare Worte und eindringliche Stimmungen. Daraus entsteht eine Ausdrucksform voller Energie und Authentizität. Ihre Texte sind persönlich und ungeschönt. Sie handeln von Trennung, Unsicherheiten, Selbstfindung und Weiterentwicklung.
            </p>
            <div class="music-style">
              <h4>Musik-Stil</h4>
              <div class="style-tags">
                <span class="tag">Indie</span>
                <span class="tag">Post-Punk</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Band Members -->
        <div class="members">
          <h3>Band-Mitglieder</h3>
          <div class="members-grid">
            <div 
              v-for="(member, index) in bandMembers" 
              :key="member.name"
              class="member-card"
              :class="`member-${index + 1}`"
            >
              <div class="member-image">
                <img :src="member.image" :alt="member.name" />
                <div class="member-overlay">
                  <div class="member-info">
                    <h4>{{ member.name }}</h4>
                    <p>{{ member.role }}</p>
                  </div>
                </div>
              </div>
              <div class="member-details">
                <h4>{{ member.name }}</h4>
                <p class="member-role">{{ member.role }}</p>
                <p class="member-bio">{{ member.bio }}</p>
                <div class="member-influences">
                  <span class="influence-label">Einflüsse:</span>
                  <span class="influences">{{ member.influences }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const bandMembers = [
  {
    name: 'Elena',
    role: 'Vocals & Bass',
    image: '/zooflora-mitglier-1.png',
    bio: 'Frontmann und kreativer Kopf der Band. Seine Texte handeln von urbaner Einsamkeit und gesellschaftlichen Widersprüchen.',
    influences: 'Ian Curtis, Robert Smith, Nick Cave'
  },
  {
    name: 'Constantin',
    role: 'Vocals & Gitarre',
    image: '/zooflora-mitglier-2.png',
    bio: 'Bassistin mit einem Faible für elektronische Klänge. Schafft die rhythmische Basis für Zoo/Floras Sound.',
    influences: 'Peter Hook, Kim Deal, Tina Weymouth'
  },
  {
    name: 'Benjamin',
    role: 'Vocals & Gitarre',
    image: '/zooflora-mitglier-3.png',
    bio: 'Schlagzeuger mit experimentellem Ansatz. Kombiniert traditionelle Drums mit elektronischen Beats.',
    influences: 'Stephen Morris, Martin Atkins, Can'
  },
  {
    name: 'Lennard',
    role: 'Schlagzeug',
    image: '/zooflora-mitglier-4.png',
    bio: 'Gitarristin und Effekt-Spezialistin. Schafft atmosphärische Klanglandschaften und unverwechselbare Texturen.',
    influences: 'Kevin Shields, Robin Guthrie, Daniel Ash'
  }
]

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  
  // Biography animation
  gsap.fromTo('.biography-text', 
    {
      opacity: 0,
      x: -100
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.biography',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  )
  
  // Members animation
  gsap.fromTo('.member-card', 
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
        trigger: '.members-grid',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  )
  
  // Member card hover effects
  document.querySelectorAll('.member-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  })
})
</script>

<style scoped>
.artist-section {
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

.artist-content {
  display: grid;
  gap: 4rem;
}

.biography {
  max-width: 800px;
  margin: 0 auto;
}

.biography-text h3 {
  font-size: 2rem;
  color: #FFED00;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.biography-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #cccccc;
}

.music-style {
  margin-top: 2rem;
}

.music-style h4 {
  font-size: 1.3rem;
  color: #FFED00;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.style-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: rgba(255, 237, 0, 0.1);
  border: 1px solid #FFED00;
  color: #FFED00;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

.members h3 {
  font-size: 2rem;
  color: #FFED00;
  text-align: center;
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.member-card {
  background: #1a1a1a;
  border: 1px solid rgba(255, 237, 0, 0.2);
  border-radius: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.member-card:hover {
  border-color: #FFED00;
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(255, 237, 0, 0.2);
}

.member-image {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
  filter: contrast(1.3) brightness(0.8) grayscale(0.2);
}

.member-card:hover .member-image img {
  transform: scale(1.1);
}

.member-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 237, 0, 0.8) 0%, rgba(24, 24, 24, 0.8) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.member-card:hover .member-overlay {
  opacity: 1;
}

.member-info {
  text-align: center;
  color: #181818;
}

.member-info h4 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.member-info p {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.member-details {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.member-details h4 {
  font-size: 1.3rem;
  color: #FFED00;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.member-role {
  color: #cccccc;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.member-bio {
  color: #cccccc;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.member-influences {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.influence-label {
  font-size: 0.8rem;
  color: #FFED00;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.influences {
  font-size: 0.9rem;
  color: #cccccc;
  font-style: italic;
}

@media (max-width: 768px) {
  .members-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 100%;
  }
  
  .member-card {
    margin: 0 1rem;
  }
  
  .member-image {
    height: 200px;
  }
  
  .artist-content {
    gap: 3rem;
  }
}

@media (max-width: 1024px) and (min-width: 769px) {
  .members-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .member-card {
    margin: 0;
  }
  
  .member-image {
    height: 180px;
  }
  
  .member-details {
    padding: 1rem;
  }
  
  .biography-text p {
    font-size: 1rem;
  }
}
</style>
