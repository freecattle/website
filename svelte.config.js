import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter(),
		csp: {
			mode: 'auto',
			directives: {
				'default-src': ['self', 'blob:', 'unsafe-inline'],
				'script-src': ['self', 'unsafe-inline'],
				'style-src': ['self', 'unsafe-inline'],
				'object-src': ['none'],
				'base-uri': ['self'],
				'frame-ancestors': ['self']
			}
		}
	}
};

export default config;
