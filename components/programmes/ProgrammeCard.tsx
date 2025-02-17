'use client';

import Image from 'next/image';

interface ProgrammeCardProps {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
}

export function ProgrammeCard({ title, subtitle, description, imageUrl }: ProgrammeCardProps) {
  return (
    <div className="relative bg-white rounded-xl shadow-xl overflow-hidden h-[500px] md:h-[600px] mx-auto max-w-4xl">
      {/* Image */}
      <div className="relative w-full h-[200px] md:h-[250px]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-6 md:p-8">
        <h2 className="text-3xl font-della-respira mb-2">{title}</h2>
        {subtitle && (
          <p className="text-lg text-gray-600 mb-4 font-della-respira">{subtitle}</p>
        )}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#B7A369] to-[#D4C391]" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4C391] to-[#B7A369]" />
    </div>
  );
}
