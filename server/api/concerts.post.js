import fs from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Validierung der erforderlichen Felder
    if (!body.title || !body.date || !body.city || !body.venue) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Titel, Datum, Stadt und Venue sind erforderlich'
      })
    }
    
    // Generiere Dateiname: YYYYMMDD-slugified-title.md
    const dateStr = body.date.replace(/-/g, '')
    const slug = body.title.toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
    const filename = `${dateStr}-${slug}.md`
    
    // Erstelle Markdown mit Frontmatter
    const markdown = `---
title: ${body.title}
date: ${body.date}
city: ${body.city}
venue: ${body.venue}
time: ${body.time || ''}
${body.ticket_url ? `ticket_url: ${body.ticket_url}` : ''}
${body.photos_url ? `photos_url: ${body.photos_url}` : ''}
published: true
---

${body.description || ''}`
    
    // Erstelle content/concerts Verzeichnis falls es nicht existiert
    const concertsDir = path.join(process.cwd(), 'content', 'concerts')
    if (!fs.existsSync(concertsDir)) {
      fs.mkdirSync(concertsDir, { recursive: true })
    }
    
    // Schreibe Datei
    const filePath = path.join(concertsDir, filename)
    fs.writeFileSync(filePath, markdown, 'utf8')
    
    return { 
      success: true, 
      filename,
      message: 'Konzert erfolgreich gespeichert'
    }
    
  } catch (error) {
    console.error('Error saving concert:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Fehler beim Speichern des Konzerts'
    })
  }
})
