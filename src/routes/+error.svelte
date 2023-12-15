<script>
	import { page } from '$app/stores';
</script>

<main class="flex flex-col justify-center items-center bg-black min-h-screen py-8 px-8">
	<h1 class="mb-6 text-center text-7xl font-semibold text-white">
		{$page.status}: {$page.error?.message}
	</h1>
	<p class="mt-6 mb-12 text-lg leading-8 text-center text-white">
		The page you’re looking for cannot be found
	</p>
</main>
