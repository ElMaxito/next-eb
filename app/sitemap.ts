// app/sitemap.ts
import { MetadataRoute } from 'next'
import { supabase } from '@/utils/supabase'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://elke-bitterhof.de'

  const { data: posts } = await supabase
    .from('posts')
    .select('id, date')
    .order('date', { ascending: false })

  const staticPages = [
    {
      url: `${baseUrl}/aktuell`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/vita`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/galerie`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  const postEntries = posts?.map((post) => ({
    url: `${baseUrl}/aktuell`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  })) || []

  return [...staticPages, ...postEntries]
}