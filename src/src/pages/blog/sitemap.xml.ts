import { getPublishedPosts, blogUrl, postUrl, categoryUrl } from '@/lib/blog';

// Sitemap for blog.pecuvate.com (served at /sitemap.xml on that host).
export async function GET() {
  const posts = await getPublishedPosts();
  const categories = new Set(posts.flatMap((p) => p.data.pillars));
  const urls = [blogUrl(), ...posts.map((p) => postUrl(p.id)), ...[...categories].map(categoryUrl)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
