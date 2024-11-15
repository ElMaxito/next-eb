// components/layout/MainLayout.tsx
"use client"

import { Navigation } from './Navigation';
import Banner from './Banner';
import Footer from './Footer';
import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen">
      <Banner />
      <Navigation />
      <main className="container mx-auto px-4 py-8 mb-16 sm:mb-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}