<script lang="ts">
	import '../app.css';
</script>

<slot />

<style lang="postcss">
	:global(body) {
		@apply bg-[#080808];
	}
</style>
