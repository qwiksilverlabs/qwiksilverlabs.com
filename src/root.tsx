import { component$, isDev } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city';
import { Footer } from '@components/footer';
import { Header } from '@components/header';
import { RouterHead } from '@components/router-head';

import '@styles/global.css';
import 'virtual:uno.css';

export default component$(() => {
	return (
		<QwikCityProvider>
			<head>
				<meta name="apple-mobile-web-app-title" content="Qwiksilver Labs" />
				{!isDev && (
					<link rel="manifest" href={`${import.meta.env.BASE_URL}site.webmanifest`} />
				)}

				<RouterHead />
			</head>
			<body lang="en" class="bg-zinc-900 text-primary">
				<Header />
				<RouterOutlet />
				<Footer />
			</body>
		</QwikCityProvider>
	);
});
