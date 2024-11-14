<script lang="ts">
	import '../../tailwind.css';
	import '../../app.css';
</script>

<slot />

<style lang="postcss">
	:global(body) {
		@apply bg-white;
	}

	:global(.main-container) {
		@apply mx-auto mt-4 max-w-4xl p-8 bg-white text-[#666666];
	}

	:global(.title) {
		@apply text-xl font-bold text-[#121212] mb-8 tracking-tight;
	}

	:global(.last-updated) {
		@apply text-sm font-bold mb-4;
	}

	:global(.section-title) {
		@apply text-lg font-bold text-[#121212] mb-4;
	}

	:global(.content-paragraph) {
		@apply mb-6;
	}

	:global(.link) {
		@apply text-[#0F4BF1] underline-offset-4 hover:underline;
	}
</style>
