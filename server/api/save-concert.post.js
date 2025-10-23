import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { filename, content } = body

    if (!filename || !content) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Filename and content are required'
      })
    }

    // Ensure the content/concerts directory exists
    const contentDir = join(process.cwd(), 'content', 'concerts')
    await mkdir(contentDir, { recursive: true })

    // Write the file
    const filePath = join(contentDir, filename)
    await writeFile(filePath, content, 'utf8')

    return {
      success: true,
      message: `Concert saved as ${filename}`,
      filename: filename
    }
  } catch (error) {
    console.error('Error saving concert:', error)
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to save concert'
    })
  }
})
