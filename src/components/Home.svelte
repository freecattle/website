<main class="flex flex-col justify-center items-center bg-black">
	<h2
		class="flex px-8 pt-8 pb-12 text-[3rem] font-normal tracking-tight text-white md:px-32 md:pt-12 md:pb-24 md:text-[5rem]"
	>
		Software Development & Research
	</h2>
	<div class="flex flex-col md:flex-row">
		<a class="flex w-full p-2 md:p-4" href="mailto:info@freecattle.com">
			<button
				class="flex items-center justify-left w-full h-32 px-16 text-4xl font-medium text-[#121215] bg-white border rounded-full lg:h-40 lg:text-5xl"
			>
				Contact →
			</button>
		</a>

		<a class="flex w-full p-2 md:p-4" href="https://github.com/freecattle" target="_blank">
			<button
				class="flex items-center justify-left w-full h-32 px-16 text-4xl font-medium text-white bg-[#0a3bff] rounded-full lg:h-40 lg:text-5xl"
			>
				GitHub →
			</button>
		</a>
	</div>
</main>

<style>
	main {
		min-height: calc(100vh - 14rem);
	}

	h2 {
		line-height: 1.2;
	}

	button {
		width: 600px;
		outline-offset: -3px;
	}

	@media (max-width: 1500px) {
		main {
			min-height: calc(100vh - 14rem);
		}

		h2 {
			line-height: 1.2;
		}

		button {
			width: 40vw;
		}
	}

	@media (max-width: 768px) {
		main {
			min-height: calc(100vh - 10rem);
		}

		h2 {
			line-height: 1.2;
		}

		button {
			width: 90vw;
		}
	}
</style>
