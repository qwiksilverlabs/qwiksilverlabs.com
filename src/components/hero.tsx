import { component$ } from '@builder.io/qwik';

export const Hero = component$(() => {
	return (
		<div class="container min-h-3xl grid place-items-center">
			<div class="space-y-xl">
				<div class="text-center space-y-xl">
					<h2 class="text-7xl">
						An <span class="text-[#ac7ef4] font-semibold">intuitive</span> ecosystem for{' '}
						<span class="text-[#009dfd] font-semibold">Qwik</span>
					</h2>
					<p class="text-2xl text-muted">
						We makes Qwik developers more productive than ever before.
					</p>
				</div>
				<div class="flex justify-center">
					<button
						type="button"
						class="border border-white/10 py-3 px-5 text-xl flex items-center gap-2 font-mono uppercase rounded-xs text-muted hover:(text-white border-white cursor-pointer) duration-200">
						Explore Ecosystem <i class="i-carbon:chevron-right" />
					</button>
				</div>
			</div>
		</div>
	);
});
