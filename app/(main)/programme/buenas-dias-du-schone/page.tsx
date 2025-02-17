'use client';

export default function BuenasDiasDuSchonePage() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-della-respira mb-4">Buenas dias, du Schöne</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=2069&auto=format&fit=crop" 
            alt="Buenas dias, du Schöne"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-della-respira">Latinas in der Literatur</h2>
          <div className="prose prose-lg">
            <p>Von Mozart bis Puccini - eine Reise durch die bekanntesten Opernarien. Ein Programm, das die Vielfalt und Schönheit der Opernwelt präsentiert.</p>
            
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
