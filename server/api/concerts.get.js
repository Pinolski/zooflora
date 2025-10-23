export default defineEventHandler(async (event) => {
  try {
    // Return all concerts from content files
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
      },
      {
        _id: '20251024-test12345',
        title: 'Test12345',
        date: '2025-10-24',
        city: 'Test-Stadt am Rhein',
        venue: 'Werden die ddetails überhaupt angezeigt?',
        time: '23:00 Uhr',
        ticket_url: 'https://www.instagram.com/purehonestmusic_/',
        published: true
      },
      {
        _id: '20240405-post-punk-festival-muenchen',
        title: 'Post-Punk Festival',
        date: '2024-04-05',
        city: 'München',
        venue: 'Festival Grounds',
        time: '19:30 Uhr',
        photos_url: 'https://example.com/photos',
        published: true
      },
      {
        _id: '20240322-underground-venue-hamburg',
        title: 'Underground Venue',
        date: '2024-03-22',
        city: 'Hamburg',
        venue: 'Underground Club',
        time: '21:00 Uhr',
        photos_url: 'https://example.com/photos',
        published: true
      },
      {
        _id: '20240315-club-indigo-berlin',
        title: 'Club Indigo',
        date: '2024-03-15',
        city: 'Berlin',
        venue: 'Club Indigo',
        time: '20:00 Uhr',
        photos_url: 'https://example.com/photos',
        published: true
      },
      {
        _id: '20240210-dark-wave-club-koeln',
        title: 'Dark Wave Club',
        date: '2024-02-10',
        city: 'Köln',
        venue: 'Dark Wave Club',
        time: '20:30 Uhr',
        photos_url: 'https://example.com/photos',
        published: true
      },
      {
        _id: '20240125-indie-night-frankfurt',
        title: 'Indie Night',
        date: '2024-01-25',
        city: 'Frankfurt',
        venue: 'Indie Club',
        time: '21:00 Uhr',
        photos_url: 'https://example.com/photos',
        published: true
      },
      {
        _id: '20240112-experimental-stage-stuttgart',
        title: 'Experimental Stage',
        date: '2024-01-12',
        city: 'Stuttgart',
        venue: 'Experimental Stage',
        time: '20:00 Uhr',
        photos_url: 'https://example.com/photos',
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
