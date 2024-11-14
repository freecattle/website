<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Privacy policy – Free Cattle</title>
	<meta name="description" content="Privacy policy" />
	<meta name="author" content="Free Cattle, Inc." />
	<meta name="theme-color" content="#ffffff" />
	<meta property="og:title" content="Privacy policy – Free Cattle" />
	<meta property="og:description" content="Privacy policy" />
	<meta property="og:url" content="https://freecattle.com/privacy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Privacy policy – Free Cattle" />
	<meta name="twitter:description" content="Privacy policy" />
	<link rel="shortcut icon" href="/favicon.svg" />
	<link rel="icon" href="/favicon.svg" />
	<link rel="icon" href="/favicons/favicon-32x32.png" sizes="32x32" />
	<link rel="icon" href="/favicons/favicon-16x16.png" sizes="16x16" />
	<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#ffffff" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Free Cattle, Inc." />
</svelte:head>

<div class="flex flex-col bg-white h-full w-screen">
	{@html data.props.safeHtmlContent}
</div>
