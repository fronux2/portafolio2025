// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://marcosm.cl',
  integrations: [
    sitemap({
      // /gracias/ lleva noindex: no debe anunciarse en el sitemap
      filter: (page) => !page.includes('/gracias'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});