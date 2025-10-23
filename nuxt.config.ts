export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/google-fonts', 'nuxt-gtag', '@nuxt/content'],
  content: {
    // Disable database for now to avoid TTY issues
    database: false,
    // Use file-based content instead
    sources: {
      content: {
        driver: 'fs',
        prefix: '/',
        base: './content'
      }
    }
  },
  ssr: true,
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'ZooFlora - Indie/Post-Punk Band',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'ZooFlora - Moderne Indie/Post-Punk Band aus Köln' },
        { name: 'theme-color', content: '#FFED00' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },
  gtag: {
    id: 'G-XXXXXXXXXX' // Replace with your Google Analytics ID
  },
  googleFonts: {
    families: {
      'Inter': [400, 500, 600, 700],
      'Playfair+Display': [400, 500, 600, 700],
      'Space+Mono': [400, 700],
      'Roboto+Mono': [100, 200, 300, 400, 500, 600, 700]
    }
  }
})