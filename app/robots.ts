// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/_next/',
          '/server-sitemap.xml', // If you add a dynamic sitemap later
          '/*?*', // Prevents crawling of search params
        ],
      },
      {
        userAgent: 'GPTBot', // Specific rule for ChatGPT crawler
        disallow: ['/'], // Prevent ChatGPT from crawling the site
      },
    ],
    sitemap: 'https://elke-bitterhof.de/sitemap.xml',
  }
}