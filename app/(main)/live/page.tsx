// app/(main)/aktuell/page.tsx
import { supabase } from '@/utils/supabase';
import PostCard, { Post } from '@/components/posts/PostCard';
import Image from 'next/image';

async function getPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('display_order', { ascending: false });

  if (error) throw error;
  return data as Post[];
}

// Group posts by future and past events
function groupPostsByDate(posts: Post[]) {
  const now = new Date();
  const upcoming = posts.filter(post => new Date(post.date) >= now);
  const past = posts.filter(post => new Date(post.date) < now);
  
  return { upcoming, past };
}

export default async function AktuellPage() {
  const posts = await getPosts();
  const { upcoming, past } = groupPostsByDate(posts);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6">
      {/* Hero Section - Reduced Size */}
      <div className="relative mb-10 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-900/80 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0">
          <Image 
            src="/backgroundmic.jpg" 
            alt="Live Events Background" 
            fill 
            className="object-cover" 
            priority 
          />
        </div>
        <div className="relative z-20 py-8 px-6 md:py-12 md:px-10 text-white">
          <h1 className="text-3xl md:text-4xl font-della-respira mb-2 tracking-wide">
            Live Veranstaltungen
          </h1>
          <p className="text-base md:text-lg max-w-2xl opacity-90 leading-relaxed">
            Erleben Sie Lesungen, Konzerte und künstlerische Darbietungen in einer einzigartigen Atmosphäre.
          </p>
        </div>
      </div>
      
      {/* Upcoming Events Section */}
      {upcoming.length > 0 && (
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-indigo-200 mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-della-respira text-indigo-900">Kommende Veranstaltungen</h2>
            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-indigo-200 ml-4"></div>
          </div>
          
          <div className="space-y-10">
            {upcoming.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}
      
      {/* Past Events Section */}
      {past.length > 0 && (
        <section>
          <div className="flex items-center mb-8">
            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-200 mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-della-respira text-gray-700">Vergangene Veranstaltungen</h2>
            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-gray-200 ml-4"></div>
          </div>
          
          <div className="space-y-10">
            {past.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}