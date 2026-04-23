import { component$ } from '@builder.io/qwik';

type SocialMedia = {
	name: string;
	url: string;
	icon: string;
};

const socialMedia: SocialMedia[] = [
	{
		name: 'GitHub',
		url: 'https://github.com/qwiksilverlabs',
		icon: 'i-carbon-logo-github',
	},
	{
		name: 'Discord',
		url: 'https://discord.qwiksilverlabs.com',
		icon: 'i-carbon-logo-discord',
	},
];

export const Footer = component$(() => {
	return (
		<footer class="w-full py-5 border-t border-t-white/10">
			<div class="container flex flex-row justify-between">
				<div class="">
					<p class="text-sm text-muted">© 2026 Qwiksilver Labs</p>
				</div>
				<ul class="flex flex-row gap-8">
					{socialMedia.map(({ name, icon, url }) => (
						<li key={name} class="text-muted hover:text-primary duration-200">
							<a href={url} target="_blank" rel="noopener noreferrer">
								<i class={[icon, 'text-xl']} />
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
});
