// @ts-check
import { defineConfig } from 'astro/config';

const deployTarget = process.env.DEPLOY_TARGET;
const isGitHubProjectPages = deployTarget === 'github-project-pages';
const isGitHubCustomDomain = deployTarget === 'github-custom-domain';

// https://astro.build/config
export default defineConfig({
  site: isGitHubCustomDomain
    ? 'https://syntheticphysiologylab.com'
    : isGitHubProjectPages
      ? 'https://fspasqualini.github.io'
      : undefined,
  base: isGitHubCustomDomain ? '/' : isGitHubProjectPages ? '/spl-website-dev' : '/spl-website',
  vite: {
    preview: {
      allowedHosts: [
        'drosss-mac-mini.tail76b099.ts.net',
        'drosss-mac-mini-2.tail76b099.ts.net',
      ],
    },
  },
});
