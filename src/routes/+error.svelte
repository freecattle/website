<script>
	import { page } from '$app/stores';
</script>

<main
	class="flex flex-col justify-center items-center bg-[#080808] min-h-screen py-20 px-4 sm:px-10"
>
	<h1 class="mb-8 text-center text-5xl sm:text-7xl font-semibold text-white" aria-live="assertive">
		{$page.status}: {$page.error?.message}
	</h1>
	<p class="my-8 text-base sm:text-lg leading-8 text-center text-white">
		The page you’re looking for can’t be found.
	</p>
</main>
