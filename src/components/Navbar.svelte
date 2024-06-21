<script lang="ts">
	import { onMount } from 'svelte';
	let navActive = false;
	let currentPath = '';

	onMount(() => {
		currentPath = window.location.pathname;
	});

	const handleMenuButtonClick = () => {
		navActive = !navActive;
	};

	const handleOverlayClick = () => {
		if (navActive) {
			navActive = false;
		}
	};
</script>

<header class="flex items-center justify-between min-h-20 px-6 md:px-16">
	<h1 class="text-3xl font-semibold tracking-tight text-white select-none md:text-4xl">
		<a data-sveltekit-reload class="link-free-cattle" href="/">Free Cattle</a>
	</h1>
	<button class="scale-110 -mr-[6px] md:hidden" on:click={handleMenuButtonClick} aria-label="Menu">
		<span class="block w-6 h-0.5 mb-1.5 bg-white" />
		<span class="block w-6 h-0.5 mb-1.5 bg-white" />
		<span class="block w-6 h-0.5 bg-white" />
	</button>
	<nav
		class="nav-mobile-menu fixed top-0 left-0 flex items-center justify-center w-full bg-[#1d1d1b] z-50 {navActive
			? 'translate-y-0'
			: ' -translate-y-[200%]'}"
		class:active={navActive}
	>
		<ul class="flex flex-col text-center text-[1.4rem]">
			<li class="flex items-center justify-center py-6">
				<a
					class="font-semibold text-[#e8e7ed] {currentPath === '/' ? 'selected' : 'not-selected'}"
					data-sveltekit-reload
					href="/">Home</a
				>
			</li>
			<li class="flex items-center justify-center py-6">
				<a
					class="font-semibold text-[#e8e7ed] {currentPath === '/about'
						? 'selected'
						: 'not-selected'}"
					data-sveltekit-reload
					href="/about">About</a
				>
			</li>
			<li class="flex items-center justify-center py-6">
				<a class="font-semibold text-[#e8e7ed] not-selected" href="mailto:info@freecattle.com"
					>Contact</a
				>
			</li>
		</ul>
	</nav>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="fixed top-0 left-0 flex w-full h-full bg-[#080808] opacity-70 z-40 {navActive
			? 'block'
			: 'hidden'}"
		on:click={handleOverlayClick}
	/>
	<nav
		class="hidden md:flex {navActive ? 'translate-y-full' : '-translate-y-0'}"
		class:active={navActive}
	>
		<ul class="flex flex-row">
			<li class="flex items-center justify-center px-6 h-max">
				<div
					class="flex px-4 py-1 font-medium text-base text-white border border-transparent rounded-full"
				>
					<a data-sveltekit-reload class="hover:underline underline-offset-4" href="/">Home</a>
				</div>
			</li>
			<li class="flex items-center justify-center px-6 h-max">
				<div
					class="flex px-4 py-1 font-medium text-base text-white border border-transparent rounded-full"
				>
					<a data-sveltekit-reload class="hover:underline underline-offset-4" href="/about">About</a
					>
				</div>
			</li>
			<li class="flex items-center justify-center px-6 h-max">
				<div
					class="flex px-4 py-1 font-medium text-base text-[#080808] bg-white border border-white rounded-full hover:bg-[#080808] hover:text-white"
				>
					<a href="mailto:info@freecattle.com">Contact</a>
				</div>
			</li>
		</ul>
	</nav>
</header>

<style>
	.selected {
		opacity: 1;
	}

	.not-selected {
		opacity: 0.5;
	}

	.not-selected:focus {
		opacity: 1;
	}

	.not-selected:hover {
		opacity: 1;
	}

	.nav-mobile-menu {
		height: max(50vh, 320px);
		transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1);
	}

	@media (max-width: 768px) {
		button {
			border-radius: 8px;
			padding: 12px 9px;
		}

		button:hover {
			background-color: hsla(0, 0%, 98%, 0.1);
		}
	}
</style>
