import { defineConfig } from 'oxfmt';

export default defineConfig({
	useTabs: true,
	tabWidth: 4,
	printWidth: 100,
	endOfLine: 'lf',
	bracketSameLine: true,
	singleQuote: true,
	ignorePatterns: ['dist/**', 'node_modules/**', '**/index.json'],
	overrides: [
		{
			files: ['*.yml', '*.yaml', '*.md'],
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
});
