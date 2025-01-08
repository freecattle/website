<script lang="ts">
	import '../../tailwind.css';
	import '../../app.css';
</script>

<div class="flex flex-col h-full w-full">
	<slot />
</div>

<style lang="postcss">
	:global(body) {
		@apply bg-white;
	}

	:global(.main-container) {
		@apply mx-auto mt-4 max-w-3xl p-8 bg-white text-[#444444];
	}

	:global(.title) {
		@apply text-xl font-bold mb-8 tracking-tight;
	}

	:global(.last-updated) {
		@apply text-sm font-bold text-[#777777] mb-4;
	}

	:global(.section-title) {
		@apply text-lg font-bold mb-4;
	}

	:global(.content-paragraph) {
		@apply mb-6;
	}

	:global(.link) {
		@apply text-[#0077cc] underline-offset-4 hover:text-[#005599] hover:underline;
	}
</style>
