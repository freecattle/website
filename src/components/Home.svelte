<main
	class="flex-1 flex flex-col items-center justify-center pb-6 md:pb-16 min-h-[calc(100vh-14rem)] md:min-h-[calc(100vh-16rem)]"
>
	<h2
		class="px-6 py-6 text-[3rem] font-normal tracking-tight text-white md:px-32 md:py-16 md:text-[5rem] leading-[1.2]"
	>
		Website for Free Cattle, Inc.
	</h2>
	<div class="flex flex-col md:flex-row">
		<a class="flex w-full py-4 px-2 md:py-6 md:px-4" href="mailto:contact@freecattle.com">
			<span
				class="flex items-center justify-left w-full h-32 px-16 text-4xl font-medium text-[#080808] bg-white rounded-full lg:h-40 lg:text-5xl transition-opacity duration-200 ease-linear hover:opacity-90 btn"
			>
				Contact →
			</span>
		</a>

		<a
			class="flex w-full py-4 px-2 md:py-6 md:px-4"
			href="https://github.com/freecattle"
			target="_blank"
		>
			<span
				class="flex items-center justify-left w-full h-32 px-16 text-4xl font-medium text-white bg-[#3c46ff] rounded-full lg:h-40 lg:text-5xl transition-opacity duration-200 ease-linear hover:opacity-90 btn"
			>
				GitHub →
			</span>
		</a>
	</div>
</main>

<style lang="postcss">
	main {
		min-height: max(calc(100vh - 14rem), 560px);
	}

	.btn {
		width: 600px;
	}

	@media (max-width: 1500px) {
		.btn {
			width: 40vw;
		}
	}

	@media (max-width: 768px) {
		.btn {
			width: 90vw;
		}
	}
</style>
