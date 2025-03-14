// components/posts/PostCard.tsx
"use client"

import Image from 'next/image';
import { formatGermanDate } from '@/utils/dateFormatter';
import { useState, useEffect } from 'react';

export interface Post {
  id: number;
  header: string;
  text: string;
  image_url: string | null;
  date: string;
  address?: string; // Optional address field for Google Maps
}

function parseMarkdown(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br />');
}

export default function PostCard({ post }: { post: Post }) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const formattedDate = formatGermanDate(post.date);
  
  // Determine if the event is in the future
  const isFutureEvent = new Date(post.date) > new Date();
  
  // Extract address from text if available
  const extractAddressFromText = (text: string) => {
    const addressPattern = /Adresse:\s*([^\n]+)/i;
    const match = text?.match(addressPattern);
    return match ? match[1].trim() : null;
  };
  
  // Get address from post.address or extract from text
  const address = post.address || (post.text ? extractAddressFromText(post.text) : null);
  
  return (
    <>
      <article className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:shadow-2xl">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-90 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-400 via-indigo-500 to-blue-500"></div>
        
        {/* Status indicator for future events */}
        {isFutureEvent && (
          <div className="absolute top-4 right-4 z-20">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 border border-indigo-200">
              Kommend
            </span>
          </div>
        )}
        
        {/* Content Container */}
        <div className="relative z-10 p-6 md:p-8">
          {/* Date display with elegant styling */}
          <time className="inline-block mb-4 text-sm font-della-respira tracking-wider text-gray-600 border-b border-gray-200 pb-1">
            {formattedDate}
          </time>
          
          {/* Header with improved typography */}
          <h2 className="text-2xl md:text-3xl font-della-respira tracking-wide mb-6 text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
            {post.header}
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex flex-col md:flex-row gap-8 items-start lg:w-2/3">
              {/* Image with enhanced presentation */}
              {post.image_url && (
                <div className="md:w-1/2 w-full mb-6 md:mb-0">
                  <div 
                    className="relative cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-500 group-hover:shadow-xl p-2 bg-white"
                    onClick={() => setIsImageModalOpen(true)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <div className="flex justify-center items-center">
                      <Image
                        src={post.image_url}
                        alt={post.header}
                        width={800}
                        height={600}
                        className="max-w-full max-h-[300px] object-contain transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 text-center bg-gradient-to-t from-black/60 to-transparent">
                      Bild vergrößern
                    </div>
                  </div>
                </div>
              )}
              
              {/* Text content with improved readability */}
              <div className="md:w-1/2 w-full">
                {post.text && (
                  <div 
                    className="prose prose-sm md:prose-base lg:prose-lg prose-indigo max-w-none text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: parseMarkdown(post.text) }}
                  />
                )}
              </div>
            </div>
            
            {/* Google Maps Section */}
            {address && (
              <div className="lg:w-1/3 w-full mt-6 lg:mt-0">
                <div className="bg-white p-3 rounded-lg shadow-md">
                  <h3 className="text-lg font-della-respira mb-2 text-gray-800">Veranstaltungsort</h3>
                  <p className="text-sm text-gray-600 mb-3">{address}</p>
                  <div className="h-[200px] w-full overflow-hidden rounded-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(address)}&zoom=15`}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Enhanced Image Modal */}
      {isImageModalOpen && post.image_url && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw] flex items-center justify-center">
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-indigo-300 text-xl p-2 transition-colors duration-300 flex items-center gap-2"
            >
              <span>Schließen</span>
              <span className="text-2xl">×</span>
            </button>
            <div className="bg-white/5 p-1 rounded-lg shadow-2xl overflow-hidden">
              <Image
                src={post.image_url}
                alt={post.header}
                width={1920}
                height={1080}
                className="max-h-[85vh] w-auto object-contain"
                onClick={(e) => e.stopPropagation()}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}