import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Hero } from '@components/hero';
import { Philosophy } from '@components/philosophy';

export default component$(() => {
	return (
		<>
			<Hero />
			<Philosophy />
			<div class="min-h-12"></div>
		</>
	);
});

export const head: DocumentHead = {
	title: 'Qwiksilver Labs',
	meta: [
		{
			name: 'description',
			content: 'An intuitive ecosystem for Qwik',
		},
	],
};
