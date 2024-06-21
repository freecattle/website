<main class="flex-1 flex flex-col items-center justify-center pb-6 md:pb-16">
	<h2
		class="px-6 py-6 text-[3rem] font-normal tracking-tight text-white md:px-32 md:py-16 md:text-[5rem]"
	>
		Website for Free Cattle, Inc.
	</h2>
	<div class="flex flex-col md:flex-row">
		<a class="flex w-full py-4 px-2 md:py-6 md:px-4" href="mailto:info@freecattle.com">
			<span
				class="flex items-center justify-left w-full h-32 px-16 text-4xl font-medium text-[#121215] bg-white border rounded-full lg:h-40 lg:text-5xl btn"
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
				class="flex items-center justify-left w-full h-32 px-16 text-4xl font-medium text-white bg-[#3c46ff] rounded-full lg:h-40 lg:text-5xl btn"
			>
				GitHub →
			</span>
		</a>
	</div>
</main>

<style>
	main {
		min-height: max(calc(100vh - 14rem), 560px);
	}

	h2 {
		line-height: 1.2;
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
		main {
			min-height: max(calc(100vh - 16rem), 560px);
		}

		.btn {
			width: 90vw;
		}
	}
</style>
