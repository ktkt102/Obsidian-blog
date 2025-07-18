// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://joyful-panda-4b9849.netlify.app',
	integrations: [mdx(), sitemap()],
	trailingSlash: 'always',
});
