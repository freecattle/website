<script lang="ts">
	import '../../tailwind.css';
	import '../../app.css';
</script>

<slot />

<style lang="postcss">
	:global(body) {
		@apply bg-slate-50;
	}

	:global(.main-container) {
		@apply mx-auto mt-4 max-w-5xl p-8 bg-slate-50 text-black;
	}

	:global(.title) {
		@apply text-xl font-bold text-gray-900 mb-8 tracking-tight;
	}

	:global(.last-updated) {
		@apply text-sm font-bold text-gray-600 mb-4;
	}

	:global(.section-title) {
		@apply text-lg font-bold mb-4;
	}

	:global(.content-paragraph) {
		@apply mb-6;
	}

	:global(.link) {
		@apply text-blue-700 underline-offset-4 hover:underline;
	}
</style>
