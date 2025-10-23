export default defineEventHandler(async (event) => {
  const url = getRequestURL(event)
  
  // Block admin and API routes from search engines
  if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/admin')) {
    // Add security headers
    setHeader(event, 'X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet, noimageindex')
    setHeader(event, 'X-Content-Type-Options', 'nosniff')
    setHeader(event, 'X-Frame-Options', 'DENY')
    setHeader(event, 'X-XSS-Protection', '1; mode=block')
    setHeader(event, 'Referrer-Policy', 'no-referrer')
    
    // Block common bot user agents
    const userAgent = getHeader(event, 'user-agent') || ''
    const botPatterns = [
      /googlebot/i,
      /bingbot/i,
      /slurp/i,
      /duckduckbot/i,
      /baiduspider/i,
      /yandexbot/i,
      /facebookexternalhit/i,
      /twitterbot/i,
      /linkedinbot/i,
      /whatsapp/i,
      /telegrambot/i,
      /crawler/i,
      /spider/i,
      /bot/i
    ]
    
    if (botPatterns.some(pattern => pattern.test(userAgent))) {
      throw createError({
        statusCode: 403,
        statusMessage: 'Access denied for bots'
      })
    }
  }
})
