import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import unoCSS from 'unocss/vite';

export default defineConfig({
	plugins: [unoCSS(), qwikCity(), qwikVite(), tsconfigPaths({ root: '.' })],
	optimizeDeps: {
		exclude: [],
	},

	/**
	 * This is an advanced setting. It improves the bundling of your server code. To use it, make sure you understand when your consumed packages are dependencies or dev dependencies. (otherwise things will break in production)
	 */
	// ssr:
	//   command === "build" && mode === "production"
	//     ? {
	//         // All dev dependencies should be bundled in the server build
	//         noExternal: Object.keys(devDependencies),
	//         // Anything marked as a dependency will not be bundled
	//         // These should only be production binary deps (including deps of deps), CLI deps, and their module graph
	//         // If a dep-of-dep needs to be external, add it here
	//         // For example, if something uses `bcrypt` but you don't have it as a dep, you can write
	//         // external: [...Object.keys(dependencies), 'bcrypt']
	//         external: Object.keys(dependencies),
	//       }
	//     : undefined,

	server: {
		headers: {
			// Don't cache the server response in dev mode
			'Cache-Control': 'public, max-age=0',
		},
	},
	preview: {
		headers: {
			// Do cache the server response in preview (non-adapter production build)
			'Cache-Control': 'public, max-age=600',
		},
	},
});
