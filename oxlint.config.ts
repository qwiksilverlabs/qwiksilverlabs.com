import { defineConfig } from 'oxlint';
import { strict } from 'oxlint-plugin-qwik/ruleset';

export default defineConfig({
	extends: [strict],
	options: {
		typeAware: true,
		typeCheck: true,
	},
	overrides: [
		{
			files: ['**/*.tsx'],
			rules: {
				'qwik/jsx-img': 'off',
			},
		},
	],
});
