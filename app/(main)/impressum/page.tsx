// app/(main)/impressum/page.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum - Elke Bitterhof',
  description: 'Impressum und rechtliche Informationen'
};

export default function ImpressumPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-della-respira mb-8">Impressum</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-della-respira mb-4">Angaben gemäß § 5 TMG</h2>
          <p>
            Elke Bitterhof<br />
            c/o El Cultrun e.V.<br />
            Franz-Mehring-Platz 1<br />
            10243 Berlin
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-della-respira mb-4">Kontakt</h2>
          <p>
            Internet: www.elke-bitterhof.de
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-della-respira mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Elke Bitterhof<br />
            c/o El Cultrun e.V.<br />
            Franz-Mehring-Platz 1<br />
            10243 Berlin
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-della-respira mb-4">Haftung für Links</h2>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. 
            Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-della-respira mb-4">Haftung für Inhalt</h2>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit 
            und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir 
            gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-della-respira mb-4">Copyright</h2>
          <p>
            Alle Materialien auf dieser Website einschließlich der Bilder und Texte sind Eigentum von Elke Bitterhof 
            oder der jeweiligen Besitzer. Sie sind durch das Urheberrecht geschützt und dürfen nicht ohne Erlaubnis 
            reproduziert werden. Unautorisiertes Kopieren und Verwenden von Inhalten sowie Bildermaterial ohne 
            vorheriger schriftlicher Genehmigung ist verboten.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-della-respira mb-4">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
            Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, 
            Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der 
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seiten 
            sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-della-respira mb-4">Datenschutz</h2>
          <p>
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit 
            auf unseren Seiten personenbezogene Daten erhoben werden, erfolgt dies, soweit möglich, stets auf 
            freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-della-respira mb-4">Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben im Impressum. 
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </div>
    </div>
  );
}