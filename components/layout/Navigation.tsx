// components/Navigation.tsx

import Link from 'next/link';

const navigation = [
  { name: 'Aktuell', href: '/aktuell' },
  { name: 'Vita', href: '/vita' },
  { name: 'Galerie', href: '/galerie' },
  { name: 'Kontakt', href: '/kontakt' },
  { name: 'Impressum', href: '/impressum' },
];

export default function Navigation() {
  return (
    <nav className="sticky top-0 bg-black shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-white text-2xl font-bold">
            elke-bitterhof.de
          </h1>
          <ul className="flex flex-wrap sm:flex-nowrap gap-x-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}