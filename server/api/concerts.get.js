import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default defineEventHandler(async (event) => {
  try {
    const concertsDir = path.join(process.cwd(), 'content', 'concerts')
    
    // Prüfe ob Verzeichnis existiert
    if (!fs.existsSync(concertsDir)) {
      console.log('📁 Concerts directory does not exist, creating it...')
      fs.mkdirSync(concertsDir, { recursive: true })
      return []
    }
    
    const files = fs.readdirSync(concertsDir)
    const concerts = []
    
    for (const file of files) {
      if (file.endsWith('.md')) {
        try {
          const filePath = path.join(concertsDir, file)
          const content = fs.readFileSync(filePath, 'utf8')
          const { data, content: body } = matter(content)
          
          // Nur veröffentlichte Konzerte laden
          if (data.published !== false) {
            concerts.push({
              _id: file.replace('.md', ''),
              ...data,
              description: body.trim() || null  // Füge Beschreibung aus Body hinzu
            })
          }
        } catch (fileError) {
          console.error(`❌ Error reading file ${file}:`, fileError)
        }
      }
    }
    
    // Sortiere nach Datum (neueste zuerst)
    concerts.sort((a, b) => new Date(b.date) - new Date(a.date))
    
    console.log(`🎵 Loaded ${concerts.length} concerts from content files`)
    return concerts
    
  } catch (error) {
    console.error('❌ Error loading concerts from content files:', error)
    return []
  }
})
