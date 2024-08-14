<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	let navActive = false;
	let currentPath = '';

	onMount(() => {
		currentPath = window.location.pathname;
	});

	const handleMenuButtonClick = () => {
		navActive = !navActive;
		toggleBodyScroll(navActive);
	};

	const handleOverlayClick = () => {
		if (navActive) {
			navActive = false;
			toggleBodyScroll(navActive);
		}
	};

	const toggleBodyScroll = (disableScroll: boolean) => {
		if (disableScroll) {
			document.body.style.overflow = 'hidden';
			document.body.addEventListener('touchmove', preventTouchScroll, { passive: false });
		} else {
			document.body.style.overflow = '';
			document.body.removeEventListener('touchmove', preventTouchScroll);
		}
	};

	const preventTouchScroll = (event: TouchEvent) => {
		event.preventDefault();
	};
</script>

<header class="relative flex items-center justify-between min-h-20 px-6 md:px-16 z-50">
	<h1 class="text-3xl font-semibold tracking-tight text-white select-none md:text-4xl">
		<a data-sveltekit-reload class="link-free-cattle" href="/">Free Cattle</a>
	</h1>
	<button
		class="scale-110 -mr-1.5 md:hidden z-50"
		on:click={handleMenuButtonClick}
		aria-label="Menu"
	>
		<span
			class="block w-6 h-0.5 mb-1.5 bg-white transition-all transform duration-[400ms] ease-[cubic-bezier(.6,0,.4,1)] {navActive
				? 'rotate-45 translate-y-2'
				: ''}"
		/>
		<span
			class="block w-6 h-0.5 mb-1.5 bg-white transition-all duration-[400ms] ease-[cubic-bezier(.6,0,.4,1)] {navActive
				? 'opacity-0 scale-50'
				: 'opacity-100 scale-100'}"
		/>
		<span
			class="block w-6 h-0.5 bg-white transition-all transform duration-[400ms] ease-[cubic-bezier(.6,0,.4,1)] {navActive
				? '-rotate-45 -translate-y-2'
				: ''}"
		/>
	</button>
	{#if navActive}
		<nav
			class="nav-mobile-menu fixed top-0 left-0 flex items-center justify-center w-full bg-[#171717] z-40"
			transition:fly={{ y: -200, duration: 400, easing: cubicInOut }}
		>
			<ul class="flex flex-col text-center text-[1.4rem]">
				<li class="flex items-center justify-center py-6">
					<a
						class="font-semibold text-[#e8e7ed] {currentPath === '/'
							? 'selected'
							: 'not-selected'} transition-opacity duration-150 ease-linear"
						data-sveltekit-reload
						href="/">Home</a
					>
				</li>
				<li class="flex items-center justify-center py-6">
					<a
						class="font-semibold text-[#e8e7ed] {currentPath === '/about'
							? 'selected'
							: 'not-selected'} transition-opacity duration-150 ease-linear"
						data-sveltekit-reload
						href="/about">About</a
					>
				</li>
				<li class="flex items-center justify-center py-6">
					<a
						class="font-semibold text-[#e8e7ed] not-selected transition-opacity duration-150 ease-linear"
						href="mailto:contact@freecattle.com">Contact</a
					>
				</li>
			</ul>
		</nav>
	{/if}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	{#if navActive}
		<div
			class="fixed top-0 left-0 w-full h-full bg-[#080808] bg-opacity-30 backdrop-blur-sm z-30"
			on:click={handleOverlayClick}
			transition:fade={{ duration: 400, easing: cubicInOut }}
		/>
	{/if}
	<nav class="hidden md:flex {navActive ? 'translate-y-full' : '-translate-y-0'}">
		<ul class="flex">
			<li class="flex items-center justify-center px-6">
				<div
					class="group flex px-4 py-1 font-medium text-base text-white border border-transparent rounded-full"
				>
					<a data-sveltekit-reload href="/" class="relative">
						Home
						<span
							class="absolute bottom-0 left-0 w-full h-[1px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-linear"
						></span>
					</a>
				</div>
			</li>
			<li class="flex items-center justify-center px-6">
				<div
					class="group flex px-4 py-1 font-medium text-base text-white border border-transparent rounded-full"
				>
					<a data-sveltekit-reload href="/about" class="relative">
						About
						<span
							class="absolute bottom-0 left-0 w-full h-[1px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-linear"
						></span>
					</a>
				</div>
			</li>
			<li class="flex items-center justify-center px-6">
				<div
					class="button-wrapper flex px-4 py-1 font-medium text-base text-black bg-white border border-white rounded-full transition-opacity duration-200 ease-linear hover:opacity-90"
				>
					<a href="mailto:contact@freecattle.com" class="button relative">
						<span class="default-text">Contact</span>
						<span
							class="hover-text absolute left-0 top-full w-full text-center transition-transform duration-200 ease-out"
							>Contact</span
						>
					</a>
				</div>
			</li>
		</ul>
	</nav>
</header>

<style lang="postcss">
	.selected {
		opacity: 1;
	}

	.not-selected {
		opacity: 0.5;
	}

	.not-selected:hover {
		opacity: 1;
	}

	.nav-mobile-menu {
		height: max(50vh, 320px);
	}

	.button-wrapper {
		position: relative;
		overflow: hidden;
	}

	.button .default-text,
	.button .hover-text {
		display: block;
		transition: all 0.2s ease-out;
	}

	.button .hover-text {
		position: absolute;
		left: 0;
		top: 150%;
		width: 100%;
		text-align: center;
	}

	.button-wrapper:hover .default-text {
		transform: translateY(-150%);
	}

	.button-wrapper:hover .hover-text {
		transform: translateY(-150%);
	}

	@media (max-width: 768px) {
		button {
			padding: 12px 9px;
		}
	}
</style>
