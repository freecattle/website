<script lang="ts">
	import { page } from '$app/stores';
</script>

<main
	class="flex flex-col items-center justify-center bg-[#080808] min-h-screen py-20 px-4 md:px-10"
>
	<h1 class="mb-4 text-center text-5xl md:text-7xl font-semibold text-white" aria-live="assertive">
		{$page.status}
		{$page.error?.message}
	</h1>
	<div class="flex flex-col">
		<a href="/" class="my-8 text-[1.05rem] md:text-lg text-center text-white">
			<span class="underline-animation">
				Back to Home
				<span class="underline-span"></span>
			</span>
		</a>
	</div>
</main>

<style lang="postcss">
	.underline-animation {
		position: relative;
		display: inline-block;
		text-decoration: none;
	}

	.underline-span {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: white;
		opacity: 1;
		transition: opacity 0.15s linear;
		pointer-events: none;
	}

	.underline-animation:hover .underline-span {
		opacity: 1;
	}
</style>
