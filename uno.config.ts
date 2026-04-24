import {
	defineConfig,
	presetIcons,
	presetWebFonts,
	presetWind4,
	transformerVariantGroup,
} from 'unocss';

export default defineConfig({
	presets: [
		presetWind4({ preflights: { reset: true } }),
		presetWebFonts({
			provider: 'fontsource',
			fonts: { mono: 'Geist Mono', sans: 'Geist' },
		}),
		presetIcons({
			extraProperties: {
				display: 'inline-block',
				height: '1.2em',
				width: '1.2em',
				'vertical-align': 'text-bottom',
			},
		}),
	],
	transformers: [transformerVariantGroup()],
	shortcuts: {
		'text-primary': 'text-white',
		'text-muted': 'text-white/70',
		'border-primary': 'border-white/10',
		container: 'max-w-6xl lg:max-w-7xl px-4 md:gap-12 sm:px-6 mx-auto',
	},
});
