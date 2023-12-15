<script lang="ts">
	import '../app.css';
</script>

<slot />

<style lang="postcss">
	:global(body) {
		@apply bg-black;
	}
</style>
