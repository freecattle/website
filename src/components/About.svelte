<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

<main
	class="flex-1 flex flex-col justify-center items-center mx-auto max-w-4xl px-8 pb-6 md:px-4 md:pb-6"
>
	{#if visible}
		<h1
			class="pt-8 text-2xl font-semibold text-center text-white md:text-3xl"
			in:fly={{ y: 50, duration: 700, delay: 0 }}
		>
			About Free Cattle
		</h1>
		<div
			class="flex flex-wrap justify-around w-full py-4 text-lg leading-8 text-center text-white md:py-6 md:px-4"
			in:fly={{ y: 50, duration: 500, delay: 150 }}
		>
			<p>
				Free Cattle is a Canada-based software company that specializes in the development and
				distribution of open-source and proprietary software. As a corporate entity, Free Cattle
				possesses corporate personhood, and maintains and operates its software projects while being
				responsible for its legal and financial obligations. Free Cattle also provides its
				open-source software under permissive licenses, making it available for others to use.
			</p>
		</div>
	{/if}
</main>

<style lang="postcss">
	main {
		min-height: max(calc(100vh - 10rem), 560px);
	}

	@media (max-width: 768px) {
		main {
			min-height: max(calc(100vh - 16rem), 560px);
		}
	}
</style>
