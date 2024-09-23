<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Terms of Use – Free Cattle</title>
	<meta name="description" content="Free Cattle, Inc. Terms of Use" />
	<meta name="author" content="Free Cattle, Inc." />
	<meta name="theme-color" content="#111827" />
	<meta property="og:title" content="Terms of Use – Free Cattle" />
	<meta property="og:description" content="Free Cattle, Inc. Terms of Use" />
	<meta property="og:url" content="https://freecattle.com/terms" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Terms of Use – Free Cattle" />
	<meta name="twitter:description" content="Free Cattle, Inc. Terms of Use" />
	<link rel="shortcut icon" href="/favicon.svg" />
	<link rel="icon" href="/favicon.svg" />
	<link rel="icon" href="/favicons/favicon-32x32.png" sizes="32x32" />
	<link rel="icon" href="/favicons/favicon-16x16.png" sizes="16x16" />
	<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#111827" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Free Cattle, Inc." />
</svelte:head>

<div class="flex flex-col bg-slate-50 h-full w-screen">
	{@html data.props.safeHtmlContent}
</div>
