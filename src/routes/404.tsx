import { component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

export default component$(() => {
	const navigate = useNavigate();

	return (
		<div class="h-screen grid place-items-center">
			<div class="text-center space-y-xl">
				<h1 class="text-9xl">404</h1>
				<p class="text-muted text-4xl">Page Not Found</p>
				<button
					onClick$={() => navigate('/')}
					class="bg-white text-black font-medium duration-200 hover:(opacity-80 cursor-pointer) rounded-xs p-2">
					Return Home
				</button>
			</div>
		</div>
	);
});
