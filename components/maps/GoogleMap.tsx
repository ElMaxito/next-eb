// components/maps/GoogleMap.tsx
"use client"

import { useEffect, useRef } from 'react';

interface GoogleMapProps {
  address: string;
  height?: string;
  width?: string;
  zoom?: number;
  className?: string;
}

export default function GoogleMap({ address, height = '200px', width = '100%', zoom = 15, className = '' }: GoogleMapProps) {
  const mapRef = useRef<HTMLIFrameElement>(null);
  const encodedAddress = encodeURIComponent(address);
  
  return (
    <div className={`overflow-hidden rounded-lg shadow-md ${className}`} style={{ height, width }}>
      <iframe
        ref={mapRef}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}&zoom=${zoom}`}
      />
    </div>
  );
}
