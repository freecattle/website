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
		@apply mx-auto mt-4 max-w-4xl p-8 bg-white text-[#1a1d20];
	}

	:global(.title) {
		@apply text-xl font-bold mb-8 tracking-tight;
	}

	:global(.last-updated) {
		@apply text-sm font-bold text-[#656d78] mb-4;
	}

	:global(.section-title) {
		@apply text-lg font-bold mb-4;
	}

	:global(.content-paragraph) {
		@apply mb-6;
	}

	:global(.link) {
		@apply text-[#0f4bf1] underline-offset-4 hover:underline;
	}
</style>
