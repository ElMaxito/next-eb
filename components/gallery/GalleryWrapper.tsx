// components/gallery/GalleryWrapper.tsx
'use client';

import dynamic from 'next/dynamic';
import type { GalleryImage } from '@/types/gallery';

const GalleryContent = dynamic(() => import('./GalleryContent'), {
  loading: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-pulse">
      {[...Array(6)].map((_, i) => (
        <div 
          key={i} 
          className="aspect-square bg-gray-200 rounded-lg overflow-hidden"
        />
      ))}
    </div>
  ),
  ssr: false
});

interface GalleryWrapperProps {
  images: GalleryImage[];
}

export default function GalleryWrapper({ images }: GalleryWrapperProps) {
  return <GalleryContent images={images} />;
}