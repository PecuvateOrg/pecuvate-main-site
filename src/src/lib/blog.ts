import { getCollection } from 'astro:content';

// The blog is served at blog.pecuvate.com (Netlify host rules in netlify.toml map it
// onto /blog/ in this build). Links on blog pages are absolute so they work on both hosts.
export const SITE_URL = 'https://www.pecuvate.com';
export const BLOG_URL = 'https://blog.pecuvate.com';

export const blogUrl = (path = '') => `${BLOG_URL}/${path}`;
export const postUrl = (id: string) => blogUrl(`${id}/`);
export const categoryUrl = (slug: string) => blogUrl(`category/${slug}/`);

export async function getPublishedPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}
