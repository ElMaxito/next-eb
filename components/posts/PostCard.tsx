// components/posts/PostCard.tsx
import Image from 'next/image';
import { formatGermanDate } from '@/utils/dateFormatter';

export interface Post {
  id: number;
  header: string;
  text: string;
  image_url: string | null;
  date: string;
}

function parseMarkdown(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')  // Bold
    .replace(/\*(.*?)\*/g, '<em>$1</em>')              // Italic
    .replace(/\n/g, '<br />');                         // Line breaks
}

export default function PostCard({ post }: { post: Post }) {
  const formattedDate = formatGermanDate(post.date);

  return (
    <article className="bg-white rounded-lg shadow-xl overflow-hidden p-8 border border-gray-100">
      {/* Header Section */}
      <div className="mb-6">
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
      <div className={`flex ${post.text ? 'flex-row gap-8' : 'justify-center'}`}>
        {/* Text Column */}
        {post.text && (
          <div className="flex-1">
            <div 
              className="prose prose-lg text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: parseMarkdown(post.text) }}
            />
          </div>
        )}

        {/* Image Column */}
        {post.image_url && (
          <div className={`${post.text ? 'w-1/2' : 'w-3/4'}`}>
            <div className="relative">
              <Image
                src={post.image_url}
                alt={post.header}
                width={800}
                height={600}
                className="max-h-96 w-auto object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}