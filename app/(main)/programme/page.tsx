'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sample programme data
const programmes = [
  {
    title: 'Frauen in Licht und Schatten',
    subtitle: 'Frauen in Licht und Schatten - Eine poetische Reise durch drei Kontinente',
    description: `Michelle Obama erinnert sich an ihre Zeit im Weissen Haus; Die Tatarin Suleika wird nach Sibirien verschleppt; Nur auf dem Roten Teppich ist die dänische First-Lady vor der häuslichen Gewalt sicher; Die blinde Sabriye aus Bonn wagt sich an ein Projekt in Tibet; Mit Nobelpreisträger Kazuo Ishiguro lernen wir ein Roboter-Mädchen lieben.

Spannende Lesung mit live-Musik
30 - 90 Minuten`,
    imageUrl: '/Vita.png',
    details: {
      artists: `<strong>Elke Bitterhof</strong> studierte Gesang an der Musikhochschule "Hanns Eisler", ist Autorin, Journalistin für Fernsehen und Printmedien. Sie wird begleitet von dem Gitarristen <strong>Erich Scheuch</strong> (Chile) und der Pianistin <strong>Sibylle Kliem</strong>.`
    }
  },
  {
    title: 'Buenos días, du Schöne',
    subtitle: 'Buenos dias du Schöne - Latinas in der Literatur',
    description: `Um ihre Freude am Leben, ihre starken Gefühle, Wut, Trauer, Leidenschaft, um ihre Art zu lieben und vor allem um sie, die starken Frauen, die Latinas, geht es in der Lesung mit Live-Musik aus den Anden, ausgewählt und vorgestellt von Elke Bitterhof, Erich Scheuch und Sybille Kliem.

Isabel Allende, "Die Insel unter dem Meer", Mario Vargas Llosa, "Das böse Mädchen", Hernán Rivera Letelier, "Die Filmerzählerin" – die Geschichten dieser und anderer Autoren sind wie Reisen in ferne Welten und doch so vergleichbar mit den Erlebnissen und Erfahrungen der Frauen hierzulande und in aller Welt.`,
    imageUrl: '/buenosdias.jpg',
    details: {
      artists: `<strong>Elke Bitterhof</strong> studierte Gesang an der Musikhochschule "Hanns Eisler", ist Autorin, Journalistin für Fernsehen und Printmedien. Sie wird begleitet von dem Gitarristen <strong>Erich Scheuch</strong> (Chile) und der Pianistin <strong>Sibylle Kliem</strong>.`
    }
  },
  {
    title: 'Goodbye, DDR',
    subtitle: 'Goodbye, DDR - Prominente erzählen von ihrem Mauerfall',
    description: `Dass Angela Merkel am Abend des 9. November 1989 in der Sauna war, ist weitgehend bekannt, aber wie haben andere Prominente dieses legendäre Datum erlebt?

Elke Bitterhof, die Herausgeberin des Buches, erinnert sich an die unterhaltsamen Treffen u.a. mit Gregor Gysi, Uwe Steimle, Wim Wenders, Daniel Barenboim, Heinz-Rudolf Kunze und Regine Sylvester.

Ganz anders als erwartet verlief der Tag für die Schauspielerin Anja Kling. 
Sie war gerade aus der DDR in ihrem Trabi geflüchtet und hörte im Auffanglager in Bayern vom Mauerfall. Und nun?`,
    imageUrl: '/goodbye2.png',
    details: {
    }
  },
  {
    title: 'Heut kein Ketchup, aber Haarklemmen',
    subtitle: 'Heut kein Ketchup, aber Haarklemmen - Ein Rückblick auf Mauerzeiten',
    description: `Elke Bitterhof war Fernsehansagerin, Souvenirverkäuferin am Brandenburger Tor, Hostess am Fernsehturm, studierte Gesang an der Musikhochschule "Hanns Eisler", hat neben Erich Honecker gesungen und bei Fidel Castros Ex-Frau gefrühstückt.

Sie berichtete bei "3nach9" über ihren Rausschmiss aus dem DDR-Fernsehen und suchte einen Sommer lang dringend einen Ehemann. Damals, in den Jahren hinter der Mauer.

Ihre Reise nach Georgien wird ein Desaster unter Funktionären, und dass der Mann in ihrem Moskauer Bett von der Stasi kam - das erfährt sie erst aus ihrer Akte.

Im Programm "Heut kein Ketchup, aber Haarklemmen" erzählt sie von ihrem Leben in der DDR und dem Einzug in die Bundesrepublik.

Ein Abend, an dem man nochmal eintaucht in die vergangene Mauerzeit und die Ankunft im Westen. Kopfschüttelnd, amüsiert, ungläubig und doch authentisch. Live-Musik gibt's auch.`,
    imageUrl: '/ketchup.jpg',
    photographer: 'Ute Mahler',
    details: {
    }
  },
];

const ProgrammeContent = ({ programme }: { programme: typeof programmes[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      <div>
        <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden h-[250px] md:h-[380px] flex items-center justify-center">
          <img 
            src={programme.imageUrl} 
            alt={programme.title}
            className="w-full h-full object-contain p-2"
          />
        </div>
        {programme.photographer && (
          <p className="text-sm text-gray-500 text-right italic">Foto: {programme.photographer}</p>
        )}
      </div>
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-della-respira">{programme.subtitle.split(' - ')[0]}</h2>
          <p className="text-lg text-gray-600 italic">{programme.subtitle.split(' - ')[1]}</p>
        </div>
        <div className="prose prose-lg p-6 bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm">
          <div className="whitespace-pre-line mb-8 leading-relaxed">{programme.description}</div>
          {programme.details?.artists && (
            <div 
              className="whitespace-pre-line mt-8 leading-relaxed" 
              dangerouslySetInnerHTML={{ __html: programme.details.artists }} 
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function ProgrammePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);

  // Function to scroll active button into view
  const scrollActiveButtonIntoView = useCallback((index: number) => {
    const navElement = navRef.current;
    if (!navElement) return;

    const buttons = navElement.getElementsByTagName('button');
    const activeButton = buttons[index];
    if (!activeButton) return;

    const navRect = navElement.getBoundingClientRect();
    const buttonRect = activeButton.getBoundingClientRect();
    
    // Calculate the center position
    const scrollCenter = buttonRect.left - navRect.left - (navRect.width / 2) + (buttonRect.width / 2) + navElement.scrollLeft;

    navElement.scrollTo({
      left: scrollCenter,
      behavior: 'smooth'
    });
  }, []);

  const handleProgrammeChange = (index: number) => {
    setActiveIndex(index);
    // Use requestAnimationFrame to ensure the DOM has updated before scrolling
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollActiveButtonIntoView(index);
      });
    });
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      {/* Navigation Menu Container */}
      <div className="relative mb-8">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none" />

        {/* Scrollable Navigation */}
        <div 
          ref={navRef}
          className="overflow-x-auto scrollbar-hide"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex justify-start md:justify-center min-w-min px-4">
            <div className="inline-flex bg-white/50 backdrop-blur-sm rounded-lg p-1 shadow-lg">
              {programmes.map((programme, index) => (
                <button
                  key={index}
                  onClick={() => handleProgrammeChange(index)}
                  className={`px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap
                    ${activeIndex === index 
                      ? 'bg-white text-gray-900 shadow-md scale-105' 
                      : 'text-gray-600 hover:text-gray-900'}
                  `}
                >
                  <span className="font-della-respira text-sm md:text-base">{programme.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Dots Navigation */}
        <div className="flex justify-center gap-1 mt-2 md:hidden">
          {programmes.map((_, index) => (
            <button
              key={index}
              onClick={() => handleProgrammeChange(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300
                ${activeIndex === index 
                  ? 'bg-gray-900 w-4' 
                  : 'bg-gray-300'}
              `}
              aria-label={`Go to programme ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="min-h-[600px]">
        <AnimatePresence mode="wait">
          <ProgrammeContent key={activeIndex} programme={programmes[activeIndex]} />
        </AnimatePresence>
      </div>
    </div>
  );
}
