import { defineEventHandler, readBody, setCookie, createError } from 'h3'
import crypto from 'crypto'

// Sichere Credentials (in Produktion: Umgebungsvariablen)
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'ZooFlora2024!Secure'
const SESSION_SECRET = process.env.SESSION_SECRET || 'zooflora-super-secret-key-2024'

// In-Memory Session Store (in Produktion: Redis oder DB)
const sessions = new Map()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { username, password } = body

    // Credentials prüfen
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Session-Token generieren
      const sessionToken = crypto.randomBytes(32).toString('hex')
      const sessionData = {
        username,
        loginTime: Date.now(),
        expires: Date.now() + (24 * 60 * 60 * 1000) // 24 Stunden
      }
      
      // Session speichern
      sessions.set(sessionToken, sessionData)
      
      // HTTP-Only Cookie setzen
      setCookie(event, 'admin_session', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 // 24 Stunden
      })
      
      return { 
        success: true, 
        message: 'Erfolgreich eingeloggt',
        username: username
      }
    } else {
      throw createError({
        statusCode: 401,
        statusMessage: 'Ungültige Anmeldedaten'
      })
    }
  } catch (error) {
    console.error('Login error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Login fehlgeschlagen'
    })
  }
})

// Session-Validierung (für andere APIs)
export function validateSession(sessionToken) {
  if (!sessionToken) return null
  
  const session = sessions.get(sessionToken)
  if (!session) return null
  
  // Session abgelaufen?
  if (Date.now() > session.expires) {
    sessions.delete(sessionToken)
    return null
  }
  
  return session
}

// Session löschen
export function deleteSession(sessionToken) {
  if (sessionToken) {
    sessions.delete(sessionToken)
  }
}
