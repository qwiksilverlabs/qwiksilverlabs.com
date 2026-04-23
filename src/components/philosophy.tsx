import { component$ } from '@builder.io/qwik';
import { Card, CardProps } from './card';

const coreValues: CardProps[] = [
	{
		title: 'High-Quality & Optimized',
		description:
			'We build performant libraries with careful attention to reliability, bundle size, and developer experience.',
		icon: 'i-carbon:chip',
	},
	{
		title: 'Collaborative & Welcoming',
		description:
			'A welcoming community where developers share ideas, build together, and support every contribution with openness and care.',
		icon: 'i-carbon:branch',
	},
	{
		title: 'Open Community',
		description: 'Join our Discord server to share ideas, ask questions, and discuss with us.',
		icon: 'i-carbon:group',
	},
];

export const Philosophy = component$(() => {
	return (
		<div class="container space-y-xl">
			<div class="border border-white/10 rounded-xs p-5">
				<div class="max-w-3xl space-y-xl">
					<h1 class="text-3xl font-semibold">Our Focus</h1>
					<p class="text-muted text-2xl">
						A robust ecosystem for Qwik powered by high-quality JavaScript utilities,
						libraries, and tools, upheld by a collaborative community.
					</p>
				</div>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-xl">
				{coreValues.map((v) => (
					<Card {...v} key={v.title} />
				))}
			</div>
		</div>
	);
});
