// components/posts/PostCard.tsx

import Image from 'next/image';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';

export interface Post {
  id: number;
  header: string;
  text: string;
  image_url: string | null;
  date: string;
}

export default function PostCard({ post }: { post: Post }) {
  const date = new Date(post.date);
  const formattedDate = format(date, 'd. MMMM yyyy', { locale: de });

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      {post.image_url && (
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={post.image_url}
            alt={post.header}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="font-della-respira space-y-2">
          <h2 className="text-2xl tracking-wide">{post.header}</h2>
          <time className="text-gray-600 text-sm block">
            {formattedDate}
          </time>
        </div>
        <p className="mt-4 text-gray-700 leading-relaxed">
          {post.text}
        </p>
      </div>
    </article>
  );
}