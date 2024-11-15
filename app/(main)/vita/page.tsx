// app/(main)/vita/page.tsx

import Image from 'next/image';

export default function VitaPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-della-respira mb-8">Vita</h1>
      
      <article className="bg-white rounded-lg shadow-xl overflow-hidden p-8 border border-gray-100">
        <div className="relative">
          {/* Image container */}
          <div className="float-right ml-8 mb-6 relative w-[300px] hidden sm:block">
            <Image
              src="/Vita.png"
              alt="Elke Bitterhof"
              width={300}
              height={400}
              className="rounded-lg object-cover"
              priority
            />
          </div>

          {/* Text content with proper paragraph spacing */}
          <div className="prose prose-lg max-w-none">
            <p>
              Nach ihrem Tourismus-Diplom an der Verkehrshochschule Dresden studierte Elke Bitterhof 
              Gesang an der Musikhochschule &ldquo;Hanns Eisler&rdquo; in Berlin und absolvierte ihr Staatsexamen 
              mit Bravour. Sie stand mit Harry Belafonte auf der Bühne, sang neben Ernst Busch und 
              moderierte u.a. Konzerte von Silvio Rodriguez und Mercedes Sosa.
            </p>

            <p>
              Mit der legendären Songgruppe Oktoberklub tourte sie durch 21 Länder und begann 1984 
              mit ihrer Solokarriere.
            </p>

            <p>
              Nach elf Jahren als Fernsehmoderatorin entdeckte sie 1991 ihr Interesse für die 
              journalistische Arbeit hinter der Kamera. Es folgten mehrere Jahre als Redakteurin in 
              der Film- und Fernsehgesellschaft Provobis. In dieser Zeit entstanden Reportagen aus 
              der chilenischen Wüste, Drehs mit Delphinen, mehrere Musikvideos (Text & Komposition), 
              Unterhaltungsshows und über 50 Sendungen für Kinder.
            </p>

            <p>
              Bei ihrem mehrjährigen Aufenthalt in Südamerika lehrte sie an der Filmhochschule 
              Santiago und wurde als Direktorin an das Deutsch-Chilenische-Kulturinstitut berufen.
            </p>

            <p>
              Zurück in Berlin schrieb sie auf Bitte der Friedensglockengesellschaft e.V das Lied 
              &ldquo;Heiwa – Frieden&rdquo; (Youtube), in Gedenken an den Atombombenabwurf in Hiroshima. 
              Inzwischen ist Elke Bitterhof auch eine gefragte Autorin für Hörfunk, Printmedien und 
              poetische Nachdichtungen. So schrieb sie u.a. für José Carreras die spanische Fassung 
              des Pop-Klassikers &ldquo;Als ich fortging&rdquo;.
            </p>

            <p>
              Mit dem chilenischen Musiker José Miguel Márquez – Mitbegründer der Gruppe Illapu – 
              hat sie zwei Söhne.
            </p>

            <p>
              Seit 1998 agierte sie als Moderatorin der monatlichen MDR-Fernsehsendung 
              &ldquo;selbstbestimmt&rdquo;. Nach elf Jahren entschloss sich Elke Bitterhof die terminliche 
              Bindung an die Redaktion zu beenden und sich mehr der internationalen Fernseharbeit 
              zuzuwenden.
            </p>

            <p>
              2008 wurde sie in Santiago de Chile in den Vorstand der &ldquo;World Association of Woman 
              and Writers&rdquo; berufen.
            </p>

            <p>
              2021 bot ihr der katalanische Fernsehsender TV3 erneut den Job als Deutschland-Producerin 
              an, den sie erfolgreich bis Anfang 2024 innehatte.
            </p>

            <p>
              Schließlich entschied sie sich jedoch für die Freiberuflichkeit im kreativen Bereich 
              und kehrte als Autorin, Moderatorin und Sängerin in die Szene zurück.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}