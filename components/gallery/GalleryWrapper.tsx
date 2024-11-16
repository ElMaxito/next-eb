// components/gallery/GalleryWrapper.tsx
'use client';

import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import type { GalleryImage } from '@/types/gallery';

interface GalleryWrapperProps {
  images: GalleryImage[];
}

const uiElements = [
  {
    name: 'caption',
    order: 9,
    isButton: false,
    appendTo: 'wrapper',
    onInit: (el, pswp) => {
      const caption = document.createElement('div');
      caption.className = 'fixed bottom-0 left-0 right-0 bg-black/80 text-white px-4 py-3 text-center';
      el.appendChild(caption);

      pswp.on('change', () => {
        const currSlideElement = pswp.currSlide.data;
        caption.textContent = currSlideElement.caption || '';
      });
    },
  }
];

export default function GalleryWrapper({ images }: GalleryWrapperProps) {
  return (
    <Gallery uiElements={uiElements}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <Item
            key={image.id}
            original={image.image_url}
            thumbnail={image.image_url}
            width={image.width}
            height={image.height}
            alt={image.title}
            caption={image.title} // Changed from title to caption
          >
            {({ ref: itemRef, open }) => (
              <div 
                onClick={open}
                className="cursor-pointer rounded-lg overflow-hidden relative group flex flex-col"
              >
                <div className="aspect-square relative">
                  <img
                    ref={itemRef as React.RefObject<HTMLImageElement>}
                    src={image.image_url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:opacity-95 transition-opacity"
                    loading="lazy"
                  />
                </div>
                <div className="bg-black bg-opacity-100 backdrop-blur-sm px-4 py-3">
                  <h3 className="text-white text-sm font-medium break-words">
                    {image.title}
                  </h3>
                </div>
              </div>
            )}
          </Item>
        ))}
      </div>
    </Gallery>
  );
}