<template>
  <div class="legal-page">
    <div class="container">
      <div class="legal-content">
        <h1>Impressum</h1>
        
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          <strong>Zoo/Flora</strong><br>
          Indie / Post-Punk Band<br>
          Köln, Deutschland
        </p>
        
        <h2>Kontakt</h2>
        <p>
          E-Mail: <a href="mailto:info@zooflora.de">info@zooflora.de</a><br>
          Booking: <a href="mailto:booking@zooflora.de">booking@zooflora.de</a>
        </p>
        
        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>
          Zoo/Flora<br>
          Köln, Deutschland
        </p>
        
        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        
        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>
        
        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
        
        <div class="back-link">
          <NuxtLink to="/" class="btn btn-primary">Zurück zur Startseite</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Meta tags
useHead({
  title: 'Impressum - Zoo/Flora',
  meta: [
    { name: 'description', content: 'Impressum der Band Zoo/Flora aus Köln' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
  background: #181818;
  color: #ffffff;
  padding: 4rem 0;
}

.legal-content {
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.legal-content h1 {
  color: #FFED00;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

.legal-content h2 {
  color: #FFED00;
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.legal-content p {
  margin-bottom: 1rem;
  color: #cccccc;
}

.legal-content a {
  color: #FFED00;
  text-decoration: none;
}

.legal-content a:hover {
  text-decoration: underline;
}

.back-link {
  text-align: center;
  margin-top: 3rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #FFED00;
  color: #181818 !important;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid #FFED00;
}

.btn:hover {
  background: #e6d600;
  color: #181818 !important;
  transform: translateY(-2px);
  border-color: #e6d600;
}

@media (max-width: 768px) {
  .legal-content h1 {
    font-size: 2rem;
  }
  
  .legal-content h2 {
    font-size: 1.25rem;
  }
}
</style>
