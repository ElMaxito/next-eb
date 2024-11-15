import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  { name: 'Aktuell', href: '/aktuell' },
  { name: 'Vita', href: '/vita' },
  { name: 'Galerie', href: '/galerie' },
  { name: 'Kontakt', href: '/kontakt' },
  { name: 'Impressum', href: '/impressum' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Banner Image */}
      <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/banner.jpg"
          alt="Elke Bitterhof"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-32">
          <h1 className="container mx-auto px-4 text-white text-3xl sm:text-4xl font-bold bottom-4 absolute">
            elke-bitterhof.de
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap sm:flex-nowrap justify-between sm:justify-start gap-x-8 py-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content Container */}
      <main className="container mx-auto px-4 py-8">
        {/* Content will be added here */}
      </main>
    </div>
  );
}
