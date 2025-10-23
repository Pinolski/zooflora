import { defineEventHandler, getCookie, createError } from 'h3'
import fs from 'fs'
import path from 'path'
import { validateSession } from './login.post.js'

export default defineEventHandler(async (event) => {
  console.log('🔐 Session-based auth middleware triggered for:', event.node.req.url)

  try {
    // Session-Token aus Cookie lesen
    const sessionToken = getCookie(event, 'admin_session')
    
    if (!sessionToken) {
      // Keine Session - zeige Login-Formular
      const loginHtmlPath = path.join(process.cwd(), 'public', 'admin', 'login.html')
      const loginHtml = fs.readFileSync(loginHtmlPath, 'utf8')
      
      event.node.res.setHeader('Content-Type', 'text/html')
      return loginHtml
    }
    
    // Session validieren
    const session = validateSession(sessionToken)
    
    if (!session) {
      // Session ungültig - zeige Login-Formular
      const loginHtmlPath = path.join(process.cwd(), 'public', 'admin', 'login.html')
      const loginHtml = fs.readFileSync(loginHtmlPath, 'utf8')
      
      event.node.res.setHeader('Content-Type', 'text/html')
      return loginHtml
    }
    
    // Session gültig - lade Admin-Interface
    const adminHtmlPath = path.join(process.cwd(), 'public', 'admin', 'admin-interface.html')
    const adminHtml = fs.readFileSync(adminHtmlPath, 'utf8')
    
    // Username in HTML einsetzen
    const adminHtmlWithUser = adminHtml.replace('{{USERNAME}}', session.username)
    
    event.node.res.setHeader('Content-Type', 'text/html')
    return adminHtmlWithUser
    
  } catch (error) {
    console.error('Auth error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Authentication failed'
    })
  }
})