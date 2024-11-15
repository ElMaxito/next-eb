// app/(main)/aktuell/page.tsx
import Image from 'next/image';

interface NewsEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
}

const newsEvents: NewsEvent[] = [
  {
    id: '1',
    title: 'LESUNG MIT LIVE-MUSIK',
    date: '15. SEPTEMBER 2024',
    description: 'Frauen in Licht und Schatten - Eine literarische Reise mit musikalischer Begleitung. Ein Abend voller Geschichten über bemerkenswerte Frauen, ihre Träume und Herausforderungen.',
    image: {
      src: '/events/reading-event.jpg',
      alt: 'Lesung mit Live-Musik Event Poster'
    }
  },
  {
    id: '2',
    title: 'BUCHVORSTELLUNG: NEUE HORIZONTE',
    date: '1. AUGUST 2024',
    description: 'Präsentation meines neuen Buches "Neue Horizonte" in der Stadtbibliothek. Eine Reise durch die Geschichten von Menschen, die ihr Leben neu erfunden haben.',
  },
  {
    id: '3',
    title: 'WORKSHOP: KREATIVES SCHREIBEN',
    date: '15. JULI 2024',
    description: 'Ein intensiver Workshop für angehende Autorinnen und Autoren. Gemeinsam erkunden wir die Kunst des Geschichtenerzählens und entwickeln eigene Texte.',
    image: {
      src: '/events/workshop.jpg',
      alt: 'Workshop Kreatives Schreiben'
    }
  },
  {
    id: '4',
    title: 'LITERATURFESTIVAL MÜNCHEN',
    date: '1. JUNI 2024',
    description: 'Teilnahme am Literaturfestival München mit einer Lesung aus meinem aktuellen Roman. Anschließend Diskussion und Signierstunde.',
  },
  {
    id: '5',
    title: 'AUTORENABEND: GESCHICHTEN AUS DEM LEBEN',
    date: '15. MAI 2024',
    description: 'Ein gemütlicher Abend in der Buchhandlung Schmitt & Co. Ich lese aus meinen Werken und erzähle von den Geschichten hinter den Geschichten.',
    image: {
      src: '/events/author-evening.jpg',
      alt: 'Autorenabend Ankündigung'
    }
  }
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function AktuellPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-della-respira mb-8">Aktuell</h1>
      
      <div className="space-y-12">
        {newsEvents.map((event) => (
          <article key={event.id} className="border-b border-gray-200 pb-12 last:border-0">
            <div className="space-y-4">
              <div className="font-della-respira tracking-wider">
                <h2 className="text-2xl mb-2">{event.title}</h2>
                <time className="text-gray-600">{event.date}</time>
              </div>
              
              {event.image && (
                <div className="relative aspect-[3/2] max-w-2xl">
                  <Image
                    src={event.image.src}
                    alt={event.image.alt}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              )}
              
              <p className="text-gray-700 leading-relaxed">
                {event.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}