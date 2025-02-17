'use client';

export default function GoodbyeDDRPage() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-della-respira mb-4">Goodbye, DDR</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden h-[300px] md:h-[420px] flex items-center justify-center">
            <img 
              src="/goodbye2.png" 
              alt="Goodbye, DDR"
              className="w-[95%] h-[95%] object-contain"
            />
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-della-respira">Prominente erzählen von ihrem Mauerfall</h2>
          <div className="prose prose-lg p-6 bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm">
            <div className="whitespace-pre-line leading-relaxed">
              Dass Angela Merkel am Abend des 9. November 1989 in der Sauna war, ist weitgehend bekannt, aber wie haben andere Prominente dieses legendäre Datum erlebt?

Elke Bitterhof, die Herausgeberin des Buches, erinnert sich an die unterhaltsamen Treffen u.a. mit Gregor Gysi, Uwe Steimle, Wim Wenders, Daniel Barenboim, Heinz-Rudolf Kunze und Regine Sylvester.

Ganz anders als erwartet verlief der Tag für die Schauspielerin Anja Kling. 
Sie war gerade aus der DDR in ihrem Trabi geflüchtet und hörte im Auffanglager in Bayern vom Mauerfall. Und nun?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
