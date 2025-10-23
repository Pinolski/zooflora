<template>
  <div class="legal-page">
    <div class="container">
      <div class="legal-content">
        <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
        
        <h2>§ 1 Geltungsbereich</h2>
        <p>
          Diese Allgemeinen Geschäftsbedingungen gelten für alle Geschäftsbeziehungen zwischen Zoo/Flora und unseren Kunden, Fans und Geschäftspartnern.
        </p>
        
        <h2>§ 2 Vertragspartner</h2>
        <p>
          <strong>Zoo/Flora</strong><br>
          Indie / Post-Punk Band<br>
          Köln, Deutschland<br>
          E-Mail: <a href="mailto:info@zooflora.de">info@zooflora.de</a>
        </p>
        
        <h2>§ 3 Leistungen</h2>
        <h3>3.1 Musikalische Darbietungen</h3>
        <p>
          Zoo/Flora erbringt musikalische Darbietungen im Rahmen von Konzerten, Festivals und anderen Veranstaltungen. Die genauen Leistungen ergeben sich aus dem jeweiligen Vertrag.
        </p>
        
        <h3>3.2 Merchandise</h3>
        <p>
          Der Verkauf von Merchandise-Artikeln erfolgt nach den hier genannten Bedingungen. Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer.
        </p>
        
        <h2>§ 4 Buchungen und Auftritte</h2>
        <h3>4.1 Buchungsanfragen</h3>
        <p>
          Buchungsanfragen sind ausschließlich über <a href="mailto:booking@zooflora.de">booking@zooflora.de</a> zu stellen. Mündliche Absprachen bedürfen der schriftlichen Bestätigung.
        </p>
        
        <h3>4.2 Vertragsabschluss</h3>
        <p>
          Verträge über Auftritte kommen durch schriftliche Bestätigung zustande. Die Bestätigung muss alle wesentlichen Vertragsbedingungen enthalten.
        </p>
        
        <h3>4.3 Stornierungen</h3>
        <p>
          Stornierungen müssen schriftlich erfolgen. Bei Stornierungen gelten folgende Regelungen:
        </p>
        <ul>
          <li>Bis 30 Tage vor dem Auftritt: 50% der vereinbarten Gage</li>
          <li>Bis 14 Tage vor dem Auftritt: 75% der vereinbarten Gage</li>
          <li>Weniger als 14 Tage vor dem Auftritt: 100% der vereinbarten Gage</li>
        </ul>
        
        <h2>§ 5 Technische Anforderungen</h2>
        <h3>5.1 Bühne und Equipment</h3>
        <p>
          Der Veranstalter stellt eine angemessene Bühne und das erforderliche technische Equipment zur Verfügung. Detaillierte Anforderungen werden bei der Buchung mitgeteilt.
        </p>
        
        <h3>5.2 Soundcheck</h3>
        <p>
          Ein ausreichender Soundcheck vor dem Auftritt ist erforderlich. Die Dauer wird im Vorfeld abgesprochen.
        </p>
        
        <h2>§ 6 Zahlungsbedingungen</h2>
        <h3>6.1 Gage</h3>
        <p>
          Die vereinbarte Gage ist spätestens 14 Tage vor dem Auftritt zu zahlen, sofern nicht anders vereinbart.
        </p>
        
        <h3>6.2 Reisekosten</h3>
        <p>
          Reisekosten werden nach Absprache vom Veranstalter oder von Zoo/Flora getragen. Dies ist vor Vertragsabschluss zu klären.
        </p>
        
        <h2>§ 7 Haftung</h2>
        <h3>7.1 Haftungsbeschränkung</h3>
        <p>
          Zoo/Flora haftet nur für Vorsatz und grobe Fahrlässigkeit. Die Haftung für leichte Fahrlässigkeit ist auf den vorhersehbaren, vertragstypischen Schaden begrenzt.
        </p>
        
        <h3>7.2 Versicherung</h3>
        <p>
          Der Veranstalter ist verpflichtet, eine ausreichende Haftpflichtversicherung abzuschließen.
        </p>
        
        <h2>§ 8 Datenschutz</h2>
        <p>
          Die Erhebung und Verarbeitung personenbezogener Daten erfolgt nach den Bestimmungen der DSGVO. Details entnehmen Sie unserer <a href="/datenschutz">Datenschutzerklärung</a>.
        </p>
        
        <h2>§ 9 Schlussbestimmungen</h2>
        <h3>9.1 Salvatorische Klausel</h3>
        <p>
          Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
        </p>
        
        <h3>9.2 Anwendbares Recht</h3>
        <p>
          Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
        </p>
        
        <h3>9.3 Gerichtsstand</h3>
        <p>
          Gerichtsstand ist Köln, sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
        </p>
        
        <h2>§ 10 Kontakt</h2>
        <p>
          Bei Fragen zu diesen AGB wenden Sie sich bitte an:<br>
          E-Mail: <a href="mailto:info@zooflora.de">info@zooflora.de</a><br>
          Booking: <a href="mailto:booking@zooflora.de">booking@zooflora.de</a>
        </p>
        
        <p class="last-updated">
          <strong>Stand:</strong> Januar 2025
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
  title: 'AGB - Zoo/Flora',
  meta: [
    { name: 'description', content: 'Allgemeine Geschäftsbedingungen der Band Zoo/Flora aus Köln' },
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

.legal-content h3 {
  color: #FFED00;
  font-size: 1.2rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.legal-content p {
  margin-bottom: 1rem;
  color: #cccccc;
}

.legal-content ul {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  color: #cccccc;
}

.legal-content li {
  margin-bottom: 0.5rem;
}

.legal-content a {
  color: #FFED00;
  text-decoration: none;
}

.legal-content a:hover {
  text-decoration: underline;
}

.last-updated {
  background: #333;
  padding: 1rem;
  border-radius: 4px;
  border-left: 4px solid #FFED00;
  margin: 2rem 0;
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
  
  .legal-content h3 {
    font-size: 1.1rem;
  }
}
</style>
