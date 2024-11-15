// components/layout/MainLayout.tsx

import { Navigation } from './Navigation';
import Banner from './Banner';
import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen">
      <div className="relative">
        <Banner />
        <Navigation />
      </div>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}