// components/layout/Navigation.tsx
'use client';

import { startTransition, useTransition } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navigation = [
  { name: 'Aktuell', href: '/aktuell' },
  { name: 'Vita', href: '/vita' },
  { name: 'Galerie', href: '/galerie' },
  { name: 'Kontakt', href: '/kontakt' },
  { name: 'Impressum', href: '/impressum' },
] as const;

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    if (href === pathname) return;
    startTransition(() => {
      router.push(href);
    });
  };

  const navButton = (item: typeof navigation[number]) => (
    <button
      onClick={() => handleNavigation(item.href)}
      disabled={isPending}
      className={`text-white hover:opacity-75 transition-all duration-300 ease-in-out
                 appearance-none bg-transparent disabled:cursor-not-allowed
                 relative group
                 ${isPending ? 'opacity-50' : ''}
                 ${pathname === item.href ? 'font-semibold' : 'font-light'}`}
    >
      {item.name}
      <span 
        className={`absolute -bottom-1 left-0 h-[2px] bg-white/90 transition-all duration-300
                   ${pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`} 
      />
    </button>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className={`hidden sm:block sticky top-0 z-50 transition-all duration-300
                   ${isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-black'}
                   border-b border-gray-800`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-1">
              {navigation.map((item, index) => (
                <div key={item.name} className="flex items-center">
                  <div className="px-3 text-base tracking-wide">
                    {navButton(item)}
                  </div>
                  {index < navigation.length - 1 && (
                    <span className="text-white text-base font-light opacity-50">
                      /
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center">
              <span className="text-white text-2xl tracking-widest font-della-respira">
                elke-bitterhof.de
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="sm:hidden">
        <div className={`sticky top-0 z-40 transition-all duration-300
                        ${isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-black'}
                        border-b border-gray-800`}>
          <div className="flex justify-center h-14">
            <span className="text-white text-xl tracking-widest font-della-respira self-center">
              elke-bitterhof.de
            </span>
          </div>
        </div>

        <nav className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-t border-gray-800 z-50">
          <div className="grid grid-cols-5 py-4">
            {navigation.map((item) => (
              <div key={item.name} className="text-sm text-center">
                {navButton(item)}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}