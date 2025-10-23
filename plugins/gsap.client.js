import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

export default defineNuxtPlugin(() => {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  
  // Make GSAP available globally
  return {
    provide: {
      gsap,
      ScrollTrigger,
      ScrollToPlugin
    }
  }
})
