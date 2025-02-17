// components/posts/PostCard.tsx
"use client"

import Image from 'next/image';
import { formatGermanDate } from '@/utils/dateFormatter';
import { useState } from 'react';

export interface Post {
  id: number;
  header: string;
  text: string;
  image_url: string | null;
  date: string;
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

  return (
    <>
      <article className="relative bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-100/50">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.15] pointer-events-none" 
          style={{ backgroundImage: 'url(/backgroundmic.jpg)' }} 
        />
        {/* Content Container */}
        <div className="relative z-10">
        {/* Header Section */}
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-della-respira tracking-wide flex-1">
              {post.header}
            </h2>
            <time className="text-gray-600 text-lg ml-4 whitespace-nowrap font-della-respira">
              {formattedDate}
            </time>
          </div>
          <div className="border-b border-gray-200"></div>
        </div>

        {/* Content Section */}
        <div className="px-6 md:px-8 pb-6 md:pb-8">
          <div className={`flex flex-col-reverse md:flex-row ${post.text ? 'md:gap-8' : 'justify-center'}`}>
            {/* Text Column */}
            {post.text && (
              <div className={`flex-1 ${post.image_url ? 'mt-6 md:mt-0' : ''}}`}>
                <div 
                  className="prose prose-lg text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: parseMarkdown(post.text) }}
                />
              </div>
            )}

            {/* Image Column */}
            {post.image_url && (
              <div className={`${post.text ? 'md:w-1/2' : 'w-full md:w-3/4'}`}>
                <div 
                  className="relative cursor-pointer transition-transform duration-300 hover:scale-[1.02] flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden"
                  onClick={() => setIsImageModalOpen(true)}
                >
                  <Image
                    src={post.image_url}
                    alt={post.header}
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
      </article>

      {/* Image Modal */}
      {isImageModalOpen && post.image_url && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw] flex items-center justify-center">
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-xl p-2"
            >
              Schließen ×
            </button>
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
      )}
    </>
  );
}