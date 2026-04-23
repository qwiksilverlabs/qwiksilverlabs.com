import { component$ } from '@builder.io/qwik';

import logo from '@assets/img/logo.svg';

type NavbarItem = {
	label: string;
	to: string;
};

const navbarItems: NavbarItem[] = [
	{
		label: 'Projects',
		to: '/projects',
	},
	{
		label: 'Blog',
		to: '/blog',
	},
];

export const Header = component$(() => {
	return (
		<header class="border-b border-b-white/10 w-full">
			<nav class="container py-5 flex items-center justify-between">
				<div class="flex flex-row items-center justify-center gap-2">
					<img src={logo} alt="Qwiksilver Labs" class="w-10" />
					<span class="font-semibold text-xl">Qwiksilver Labs</span>
				</div>
				<ul class="flex flex-row justify-center items-center gap-8">
					{navbarItems.map(({ label, to }) => (
						<li key={label} class="text-muted hover:text-primary duration-200">
							<a href={to} rel="noopener noreferrer">
								{label}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
});
