<script lang="ts">
	import '../tailwind.css';
	import '../app.css';
</script>

<div class="flex flex-col h-screen w-full">
	<slot />
</div>

<style lang="postcss">
	:global(body) {
		@apply bg-[#0e0f11];
	}
</style>
