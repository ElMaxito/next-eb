'use client';

export default function HeutKeinKetchupPage() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-della-respira mb-4">Heut kein Ketchup, aber Haarklemmen</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=2071&auto=format&fit=crop" 
            alt="Heut kein Ketchup, aber Haarklemmen"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-della-respira">Ein Rückblick auf Mauerzeiten</h2>
          <div className="prose prose-lg">
            <p>Von Bach bis Händel - eine Auswahl der schönsten geistlichen Werke. Ein besinnliches Programm in sakraler Atmosphäre.</p>
            
            <h3>Programme Details</h3>
            <p>[Content to be added]</p>
            
            <h3>Artists</h3>
            <p>[Content to be added]</p>
            
            <h3>Venue & Time</h3>
            <p>[Content to be added]</p>
          </div>
        </div>
      </div>
    </div>
  );
}
