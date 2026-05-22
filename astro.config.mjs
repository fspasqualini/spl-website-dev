// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: '/spl-website',
  vite: {
    preview: {
      allowedHosts: ['drosss-mac-mini.tail76b099.ts.net'],
    },
  },
});
