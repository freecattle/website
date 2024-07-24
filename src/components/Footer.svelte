<script lang="ts">
	let currentYear: number = new Date().getFullYear();
</script>

<footer
	class="flex flex-col items-center justify-between min-h-28 py-4 px-6 md:flex-row md:min-h-20 md:px-16"
>
	<div class="mb-4 text-[1.05rem] text-white md:text-lg">
		&copy; {currentYear}
		Free Cattle, Inc.
	</div>
	<div class="flex flex-row mb-4">
		<a
			data-sveltekit-reload
			href="/terms"
			class="text-[1.05rem] md:text-lg text-white px-[1.125rem] md:px-6"
		>
			<span class="underline-animation">
				<span class="mobile">Terms</span>
				<span class="desktop">Terms of Service</span>
				<span class="underline-span"></span>
			</span>
		</a>
		<a
			data-sveltekit-reload
			href="/privacy"
			class="text-[1.05rem] md:text-lg text-white px-[1.125rem] md:px-6"
		>
			<span class="underline-animation">
				<span class="mobile">Privacy</span>
				<span class="desktop">Privacy Policy</span>
				<span class="underline-span"></span>
			</span>
		</a>
	</div>
</footer>

<style lang="postcss">
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
		opacity: 0;
		transition: opacity 0.15s linear;
		pointer-events: none;
	}

	.underline-animation:hover .underline-span {
		opacity: 1;
	}
</style>
