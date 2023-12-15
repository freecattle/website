<script lang="ts">
	import { onMount } from 'svelte';

	let currentYear: number;

	onMount(() => {
		currentYear = new Date().getFullYear();
	});
</script>

<footer
	class="flex flex-col md:flex-row items-center justify-start md:justify-between bg-black px-8 md:px-16 h-32 max-h-32 mt-12 md:mt-0"
>
	<div class="flex text-base md:text-lg text-white scale-105 md:scale-100">
		&copy; {currentYear}&nbsp;
		<a class="underline-offset-4 hover:underline" data-sveltekit-reload href="/">
			Free Cattle, Inc.
		</a>
	</div>
	<div class="flex">
		<ul class="flex flex-row">
			<li
				class="flex justify-center items-center px-[1.125rem] md:px-6 mt-6 md:mt-0 scale-105 md:scale-100"
			>
				<a
					class="flex text-base md:text-lg text-white underline-offset-4 hover:underline"
					data-sveltekit-reload
					href="/terms"
				>
					Terms
				</a>
			</li>

			<li
				class="flex justify-center items-center px-[1.125rem] md:px-6 mt-6 md:mt-0 scale-105 md:scale-100"
			>
				<a
					class="flex text-base md:text-lg text-white underline-offset-4 hover:underline"
					data-sveltekit-reload
					href="/privacy"
				>
					Privacy
				</a>
			</li>
		</ul>
	</div>
</footer>
