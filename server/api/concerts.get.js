export default defineEventHandler(async (event) => {
  try {
    // Return static concerts data for now
    const concerts = [
      {
        _id: '20251101-test-venue-ber-den-wolken-2025-yeah',
        title: 'Test Venue über den Wolken 2025 YEAH',
        date: '2025-11-01',
        city: 'Bielefeld',
        venue: 'ndüsmümdüsmnünsüd',
        time: '23:00 Uhr',
        ticket_url: 'https://www.loremipsum.de/',
        published: true
      },
      {
        _id: '20251029-test-venue-ber-den-wolken',
        title: 'Test Venue über den Wolken',
        date: '2025-10-29',
        city: 'Köln',
        venue: 'Das ist ein Test. ob wir den benötigen?',
        time: '20:00 Uhr',
        ticket_url: 'https://www.instagram.com/purehonestmusic_/',
        photos_url: 'https://www.instagram.com/',
        published: true
      },
      {
        _id: '20251028-sdcsdcsdc',
        title: 'sdcsdcsdc',
        date: '2025-10-28',
        city: 'sdsdcsdc',
        venue: 'sdcsdcsdc',
        time: '20:00 Uhr',
        ticket_url: 'https://www.instagram.com/p/DP_EZSjDK5D/',
        published: true
      }
    ]
    
    console.log('🎵 Loaded concerts from API:', concerts.length)
    return concerts
    
  } catch (error) {
    console.error('❌ Error loading concerts from API:', error)
    return []
  }
})
