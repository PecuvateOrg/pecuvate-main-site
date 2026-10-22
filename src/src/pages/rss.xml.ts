import rss from '@astrojs/rss';
import { getPublishedPosts, BLOG_URL, postUrl } from '@/lib/blog';

export async function GET() {
  const posts = await getPublishedPosts();
  return rss({
    title: 'Pecuvate — Thinking',
    description: 'Rethinking how problems get solved, and building the systems that solve them.',
    site: BLOG_URL,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      author: post.data.author,
      link: postUrl(post.id),
    })),
  });
}
