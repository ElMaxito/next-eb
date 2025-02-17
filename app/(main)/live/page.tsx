// app/(main)/aktuell/page.tsx
import { supabase } from '@/utils/supabase';
import PostCard, { Post } from '@/components/posts/PostCard';

async function getPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('display_order', { ascending: false });

  if (error) throw error;
  return data as Post[];
}

export default async function AktuellPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-della-respira mb-8">Live</h1>
      
      <div className="space-y-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}