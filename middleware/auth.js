export default defineEventHandler(async (event) => {
  // Nur für Admin-Routen anwenden
  if (!event.node.req.url.startsWith('/admin')) {
    return
  }

  console.log('🔐 Auth middleware triggered for:', event.node.req.url)

  const authHeader = event.node.req.headers.authorization
  
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return sendAuthRequired(event)
  }

  try {
    // Decode Base64 credentials
    const credentials = Buffer.from(authHeader.slice(6), 'base64').toString('utf8')
    const [username, password] = credentials.split(':')
    
    // Sichere Credentials aus Umgebungsvariablen oder Fallback
    const validUsername = process.env.ADMIN_USERNAME || 'admin'
    const validPassword = process.env.ADMIN_PASSWORD || 'ZooFlora2024!Secure'
    
    if (username === validUsername && password === validPassword) {
      return // Auth erfolgreich, weiterleiten
    } else {
      return sendAuthRequired(event)
    }
  } catch (error) {
    console.error('Auth error:', error)
    return sendAuthRequired(event)
  }
})

function sendAuthRequired(event) {
  event.node.res.setHeader('WWW-Authenticate', 'Basic realm="ZooFlora Admin"')
  event.node.res.statusCode = 401
  event.node.res.end('Authentication required')
}
