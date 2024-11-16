// app/(main)/galerie/page.tsx

import { supabase } from '@/utils/supabase';
import GalleryWrapper from '@/components/gallery/GalleryWrapper';
import type { GalleryImage } from '@/types/gallery';
import type { Metadata } from 'next';

// Static metadata
export const metadata: Metadata = {
  title: 'Galerie - Elke Bitterhof',
  description: 'Bildergalerie von Elke Bitterhof'
};

// Function to fetch images at build time
async function getGalleryImages() {
  const { data, error } = await supabase
    .from('gallery_images')
    .select('*')
    .order('display_order', { ascending: true });

  if (error) {
    console.error('Error fetching gallery images:', error);
    return [];
  }

  return data as GalleryImage[];
}

// This page will be statically generated at build time
export const dynamic = 'force-static';
export const revalidate = false; // Never revalidate, rebuild instead

export default async function GaleriePage() {
  const images = await getGalleryImages();

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-della-respira mb-8">Galerie</h1>

      {images.length === 0 ? (
        <p className="text-center text-gray-600">
          Keine Bilder verfügbar.
        </p>
      ) : (
        <GalleryWrapper images={images} />
      )}
    </div>
  );
}