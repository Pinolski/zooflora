<template>
  <div class="legal-page">
    <div class="container">
      <div class="legal-content">
        <h1>Datenschutzerklärung</h1>
        
        <h2>1. Datenschutz auf einen Blick</h2>
        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
        </p>
        
        <h2>2. Datenerfassung auf dieser Website</h2>
        <h3>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
        </p>
        
        <h3>Wie erfassen wir Ihre Daten?</h3>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
        </p>
        <p>
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
        </p>
        
        <h2>3. Hosting</h2>
        <p>
          Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
        </p>
        <p>
          <strong>Vercel Inc.</strong><br>
          340 S Lemon Ave #4133<br>
          Walnut, CA 91789<br>
          USA
        </p>
        <p>
          Die Erfassung und Verarbeitung Ihrer Daten erfolgt ausschließlich in Deutschland und orientiert sich an den strengen deutschen Datenschutzgesetzen. Bei der Datenübertragung werden die neuesten Verschlüsselungstechnologien eingesetzt.
        </p>
        
        <h2>4. Allgemeine Hinweise und Pflichtinformationen</h2>
        <h3>Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
        
        <h2>5. Datenerfassung auf dieser Website</h2>
        <h3>Cookies</h3>
        <p>
          Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht.
        </p>
        
        <h3>YouTube</h3>
        <p>
          Diese Website bindet Videos der YouTube ein. Betreiber der Seiten ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
        </p>
        <p>
          Wenn Sie eine unserer Webseiten besuchen, auf denen YouTube eingebunden ist, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.
        </p>
        
        <h2>6. Newsletter</h2>
        <p>
          Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind.
        </p>
        <p>
          Diese Daten erheben wir ausschließlich zum Zweck des Versands der angeforderten Informationen und geben sie nicht an Dritte weiter.
        </p>
        
        <h2>7. Ihre Rechte</h2>
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
        </p>
        
        <h2>8. Kontakt</h2>
        <p>
          Bei Fragen zum Datenschutz wenden Sie sich bitte an:<br>
          E-Mail: <a href="mailto:info@zooflora.de">info@zooflora.de</a>
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
  title: 'Datenschutz - Zoo/Flora',
  meta: [
    { name: 'description', content: 'Datenschutzerklärung der Band Zoo/Flora aus Köln' },
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
  
  .legal-content h3 {
    font-size: 1.1rem;
  }
}
</style>
