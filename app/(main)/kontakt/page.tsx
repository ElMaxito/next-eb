// app/(main)/kontakt/page.tsx
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Kontakt - Elke Bitterhof',
  description: 'Kontaktieren Sie Elke Bitterhof'
};

export default function KontaktPage() {
  return (
    <>
      <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-della-respira mb-8">Kontakt</h1>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
            <p className="text-lg text-gray-700">
              Für Buchungen, Presseanfragen und Kontaktaufnahmen nutzen Sie
              bitte das Formular. Ich bemühe mich um eine zeitnahe Rückmeldung.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
            <iframe 
              data-tally-src="https://tally.so/embed/m612BJ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="228"
              frameBorder="0"
              title="Kontaktformular"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}