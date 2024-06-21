<script lang="ts">
	let currentYear: number = new Date().getFullYear();
</script>

<footer
	class="flex flex-col items-center justify-between min-h-28 py-4 px-6 md:flex-row md:min-h-20 md:px-16"
>
	<div class="mb-4 text-base text-white scale-105 md:scale-100 md:text-lg">
		&copy; {currentYear}&nbsp;<a
			class="underline-offset-4 hover:underline"
			data-sveltekit-reload
			href="/">Free Cattle, Inc.</a
		>
	</div>
	<div class="flex flex-row mb-4">
		<a
			class="text-base md:text-lg text-white scale-105 md:scale-100 underline-offset-4 hover:underline px-[1.125rem] md:px-6"
			data-sveltekit-reload
			href="/terms"
		>
			<span class="mobile">Terms</span>
			<span class="desktop">Terms of Service</span>
		</a>
		<a
			class="text-base md:text-lg text-white scale-105 md:scale-100 underline-offset-4 hover:underline px-[1.125rem] md:px-6"
			data-sveltekit-reload
			href="/privacy"
		>
			<span class="mobile">Privacy</span>
			<span class="desktop">Privacy Policy</span>
		</a>
	</div>
</footer>

<style>
	@media (min-width: 768px) {
		.desktop {
			display: block;
		}
		.mobile {
			display: none;
		}
	}

	@media (max-width: 767px) {
		.desktop {
			display: none;
		}
		.mobile {
			display: block;
		}
	}
</style>
