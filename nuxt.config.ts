export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/google-fonts', 'nuxt-gtag', '@nuxt/content'],
  content: {
    // Use default file-based content
    sources: {
      content: {
        driver: 'fs',
        prefix: '/',
        base: './content'
      }
    }
  },
  ssr: true,
  css: [
    '@vuepic/vue-datepicker/dist/main.css',  // Library CSS zuerst laden
    '~/assets/css/main.css', 
    '~/assets/css/datepicker-zooflora.css',  // Dann unsere Overrides
    '~/assets/css/vue-datepicker-override.css'  // Höchste Priorität
  ],
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
  nitro: {
    routeRules: {
      '/api/**': { 
        headers: { 
          'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet, noimageindex',
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'X-XSS-Protection': '1; mode=block'
        }
      },
      '/admin/**': { 
        headers: { 
          'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet, noimageindex',
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'X-XSS-Protection': '1; mode=block'
        }
      }
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