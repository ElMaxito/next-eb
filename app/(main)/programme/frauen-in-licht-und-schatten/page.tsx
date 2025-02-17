'use client';

export default function FrauenInLichtUndSchattenPage() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-della-respira mb-4">Frauen in Licht und Schatten</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2070&auto=format&fit=crop" 
            alt="Frauen in Licht und Schatten"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-della-respira">Eine poetische Reise durch drei Kontinente</h2>
          <div className="prose prose-lg">
            <p>Ein Abend voller emotionaler Tiefe mit Werken von Schubert, Schumann und Brahms. Erleben Sie die schönsten Arien der Romantik in einer intimen Atmosphäre.</p>
            
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
