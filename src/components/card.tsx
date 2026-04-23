import { component$ } from '@builder.io/qwik';

export type CardProps = {
	title: string;
	description: string;
	icon: string;
};

export const Card = component$<CardProps>(({ title, description, icon }) => {
	return (
		<div class="border border-white/10 rounded-xs p-5 space-y-5">
			<i class={[icon, 'text-2xl']} />
			<div class="">
				<p class="text-xl font-semibold">{title}</p>
				<p class="text-muted">{description}</p>
			</div>
		</div>
	);
});
