# Zoo/Flora - Indie/Post-Punk Band Website

Eine moderne, responsive Website für die Indie/Post-Punk Band Zoo/Flora, entwickelt mit Nuxt 3 und GSAP.

## 🎨 Design Features

- **Post-Punk Ästhetik**: Scharfe Kanten, kontrastreiche Typografie (#FFED00 auf #181818)
- **Smooth Scrolling**: GSAP-basierte Scroll-Animationen
- **Responsive Design**: Mobile-First Ansatz
- **Cookie Banner**: GDPR-konforme Datenschutzerklärung

## 🏗️ Technische Features

- **Nuxt 3**: Neueste Version mit SSR/SSG
- **GSAP**: Professionelle Animationen und Scroll-Effekte
- **Vue 3**: Composition API
- **TypeScript**: Typsicherheit
- **PWA Ready**: Progressive Web App Features

## 📱 Sektionen

### Hero Section
- Band-Bild als Hintergrund
- Animierter Band-Name mit Glitch-Effekt
- Call-to-Action Buttons
- Parallax-Scrolling

### Videos
- YouTube-Video Embeds
- Responsive Grid-Layout
- Hover-Effekte
- Lazy Loading

### Artist
- Band-Biografie
- Mitglieder-Portraits
- Musik-Stil Beschreibung
- Interaktive Hover-Effekte

### Shows
- Timeline-Format
- Vergangene und kommende Shows
- Ticket-Links
- Foto-Galerie Links

### Kontakt
- Newsletter-Anmeldung
- Booking-Kontakt
- Social Media Links
- Presse-Kontakt

## 🚀 Installation

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Produktions-Build
npm run build

# Preview
npm run preview
```

## 🎭 Animationen

- **Scroll-Triggered**: Elemente erscheinen beim Scrollen
- **Parallax Effects**: Verschiedene Scroll-Geschwindigkeiten
- **Hover Effects**: Interaktive Buttons und Links
- **Page Transitions**: Smooth Übergänge zwischen Sektionen
- **Loading Animations**: Kreative Lade-Sequenzen

## 📱 Mobile Features

- Hamburger-Menü mit Fullscreen-Overlay
- Touch-optimierte Navigation
- Responsive Videos
- Swipe-Gesten

## 🍪 Cookie & Analytics

- Cookie Banner für YouTube-Embedding
- Matomo Analytics Integration
- GDPR-konforme Datenschutzerklärung
- Granulare Cookie-Einstellungen

## 🎨 Design System

### Farben
- Primary: #FFED00 (Zitronengelb)
- Secondary: #181818 (Dunkelgrau/Schwarz)
- Accent: #cccccc (Hellgrau)

### Typografie
- Headlines: Playfair Display (Serif)
- Body: Inter (Sans-Serif)
- Monospace: Space Mono

### Komponenten
- Buttons mit Hover-Effekten
- Cards mit Post-Punk Borders
- Glitch-Effekte für Headlines
- Geometrische Formen

## 🔧 Konfiguration

### YouTube Videos
Ersetze die Video-IDs in `components/VideosSection.vue`:

```javascript
const videos = [
  {
    id: 'DEINE_VIDEO_ID', // YouTube Video ID
    title: 'Song Titel',
    description: 'Beschreibung'
  }
]
```

### Analytics
Konfiguriere Google Analytics in `nuxt.config.ts`:

```typescript
gtag: {
  id: 'G-DEINE_ANALYTICS_ID'
}
```

### Social Media
Aktualisiere die Links in den Komponenten:
- `components/AppHeader.vue`
- `components/ContactSection.vue`



## 🤝 Support

Bei Fragen oder Problemen, kontaktiere www.markusgotzmann.de
