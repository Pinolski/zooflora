import { defineEventHandler, deleteCookie, getCookie } from 'h3'
import { deleteSession } from './login.post.js'

export default defineEventHandler(async (event) => {
  try {
    // Session-Token aus Cookie lesen
    const sessionToken = getCookie(event, 'admin_session')
    
    if (sessionToken) {
      // Session löschen
      deleteSession(sessionToken)
    }
    
    // Cookie löschen
    deleteCookie(event, 'admin_session', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    })
    
    return { 
      success: true, 
      message: 'Erfolgreich ausgeloggt' 
    }
  } catch (error) {
    console.error('Logout error:', error)
    return { 
      success: false, 
      message: 'Logout fehlgeschlagen' 
    }
  }
})