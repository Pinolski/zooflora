import fs from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
  try {
    const concertId = getRouterParam(event, 'id')
    
    if (!concertId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Konzert-ID ist erforderlich'
      })
    }

    const concertsDir = path.join(process.cwd(), 'content', 'concerts')
    const filePath = path.join(concertsDir, `${concertId}.md`)

    // Überprüfen, ob die Datei existiert
    if (!fs.existsSync(filePath)) {
      throw createError({
        statusCode: 404,
        statusMessage: `Konzert mit ID ${concertId} nicht gefunden.`
      })
    }

    // Datei löschen
    fs.unlinkSync(filePath)
    console.log(`🗑️ Concert file deleted: ${filePath}`)

    return {
      success: true,
      message: 'Konzert erfolgreich gelöscht'
    }

  } catch (error) {
    console.error('Error deleting concert:', error)
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Fehler beim Löschen des Konzerts'
    })
  }
})
