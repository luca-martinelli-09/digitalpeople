import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";
import { mdsvex } from 'mdsvex'
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import accessibleEmojis from 'rehype-accessible-emojis';


const extensions = ['.svelte', '.md'];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		trailingSlash: 'never',
	},
	extensions: extensions,
	preprocess: [
		preprocess({
			postcss: true,
		}),
		mdsvex({
			extensions: extensions,
			rehypePlugins: [
				rehypeExternalLinks,
				rehypeSlug,
				accessibleEmojis,
				[rehypeAutolinkHeadings, {
					behavior: 'append'
				}]
			]
		})
	],
};

export default config;

/*























const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		},
		trailingSlash: 'never',
		vite: {
			plugins: [imagetools()]
		}
	},
	extensions: extensions,
	preprocess: [
		preprocess({
			postcss: true
		}),

	],
};

export default config;

*/