import fs from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
  try {
    const concertId = getRouterParam(event, 'id')
    const body = await readBody(event)
    
    console.log('🔄 Updating concert:', concertId, body)
    
    // Validierung der erforderlichen Felder
    if (!body.title || !body.date || !body.city) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Titel, Datum und Stadt sind erforderlich'
      })
    }
    
    // Finde die existierende Datei
    const concertsDir = path.join(process.cwd(), 'content', 'concerts')
    const oldFilePath = path.join(concertsDir, `${concertId}.md`)
    
    if (!fs.existsSync(oldFilePath)) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Konzert nicht gefunden'
      })
    }
    
    // Generiere neuen Dateiname falls sich Datum oder Titel geändert haben
    const dateStr = body.date.replace(/-/g, '')
    const slug = body.title.toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
    const newFilename = `${dateStr}-${slug}.md`
    const newFilePath = path.join(concertsDir, newFilename)
    
    // Erstelle Markdown mit Frontmatter
    const markdown = `---
title: ${body.title}
date: ${body.date}
city: ${body.city}
${body.venue ? `venue: ${body.venue}` : ''}
time: ${body.time || ''}
${body.ticket_url ? `ticket_url: ${body.ticket_url}` : ''}
${body.photos_url ? `photos_url: ${body.photos_url}` : ''}
published: true
---

${body.description || ''}`
    
    // Schreibe neue Datei
    fs.writeFileSync(newFilePath, markdown, 'utf8')
    
    // Lösche alte Datei falls sich der Dateiname geändert hat
    if (oldFilePath !== newFilePath) {
      fs.unlinkSync(oldFilePath)
    }
    
    return { 
      success: true, 
      filename: newFilename,
      message: 'Konzert erfolgreich aktualisiert'
    }
    
  } catch (error) {
    console.error('Error updating concert:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Fehler beim Aktualisieren des Konzerts'
    })
  }
})
