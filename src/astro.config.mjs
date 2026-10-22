import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pecuvate.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    // Blog pages live on blog.pecuvate.com and have their own sitemap (pages/blog/sitemap.xml.ts).
    sitemap({ filter: (page) => !page.includes('/blog/') }),
  ],
});
