// @ts-check
import { defineConfig } from 'astro/config';

const isProductionPages = process.env.DEPLOY_TARGET === 'github-pages';

// https://astro.build/config
export default defineConfig({
  site: isProductionPages ? 'https://syntheticphysiologylab.com' : undefined,
  base: isProductionPages ? '/' : '/spl-website',
  vite: {
    preview: {
      allowedHosts: [
        'drosss-mac-mini.tail76b099.ts.net',
        'drosss-mac-mini-2.tail76b099.ts.net',
      ],
    },
  },
});
