'use client';

export default function GoodbyeDDRPage() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-della-respira mb-4">Goodbye DDR</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop" 
            alt="Goodbye DDR"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-della-respira">Prominente erzählen von ihrem Mauerfall</h2>
          <div className="prose prose-lg">
            <p>Ein spannendes Programm mit Werken zeitgenössischer Komponisten. Erleben Sie die Verschmelzung traditioneller Gesangskunst mit modernen Kompositionen.</p>
            
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
