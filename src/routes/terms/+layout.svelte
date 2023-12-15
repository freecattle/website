<script lang="ts">
	import '../../app.css';
</script>

<slot />

<style lang="postcss">
	:global(body) {
		@apply bg-slate-50;
	}

	.main-container {
		@apply text-black bg-slate-50 p-8 max-w-5xl mx-auto mt-4;
	}

	.title {
		@apply font-bold tracking-tight text-gray-900 text-xl mb-8;
	}

	.last-updated {
		@apply font-bold text-gray-600 text-sm mb-4;
	}

	.section-title {
		@apply font-bold text-lg mb-4;
	}

	.content-paragraph {
		@apply mb-6;
	}

	.link {
		@apply text-blue-700 underline-offset-4 hover:underline;
	}
</style>
