// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import { SITE_DOMAIN, REPO_NAME } from './src/consts';

// https://astro.build/config
export default defineConfig({
  site: SITE_DOMAIN,
  base: `/${REPO_NAME}`,
  vite: {
    plugins: [tailwindcss()]
  }
});