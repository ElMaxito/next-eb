// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Raleway, Della_Respira } from 'next/font/google';
import MainLayout from '@/components/layout/MainLayout';

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
});

const dellaRespira = Della_Respira({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-della-respira',
});

export const metadata: Metadata = {
  title: 'Elke Bitterhof - Journalistin & Autorin',
  description: 'Offizielle Website von Elke Bitterhof - Journalistin, Autorin und Moderatorin',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${raleway.variable} ${dellaRespira.variable}`}>
      <body className="font-raleway antialiased">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}