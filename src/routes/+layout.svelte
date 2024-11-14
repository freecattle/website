<script lang="ts">
	import '../tailwind.css';
	import '../app.css';
</script>

<slot />

<style lang="postcss">
	:global(body) {
		@apply bg-[#121212];
	}
</style>
