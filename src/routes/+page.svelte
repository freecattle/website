<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Home from '../components/Home.svelte';
</script>

<svelte:head>
	<title>Free Cattle</title>
	<meta name="description" content="The official corporate site of Free Cattle, Inc." />
	<meta name="application-name" content="Free Cattle" />
	<link rel="author" href="https://freecattle.com" />
	<meta name="author" content="Free Cattle" />
	<meta name="theme-color" content="#121215" />
	<meta name="creator" content="Free Cattle" />
	<meta name="og:image" content="https://freecattle.com/og.png" />
	<meta name="format-detection" content="telephone=no" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-title" content="Free Cattle" />
	<link href="/favicons/apple-touch-icon.png" rel="apple-touch-startup-image" />
	<meta name="apple-mobile-web-app-status-bar-style" content="[#121215]-translucent" />
	<link rel="manifest" href="/manifest.json" />
	<meta property="og:title" content="Free Cattle" />
	<meta property="og:description" content="The official corporate site of Free Cattle, Inc." />
	<meta property="og:url" content="https://freecattle.com/" />
	<meta property="og:image" content="https://freecattle.com/og.png" />
	<meta property="og:image:alt" content="Free Cattle" />
	<meta property="og:image:width" content="512" />
	<meta property="og:image:height" content="512" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Free Cattle" />
	<meta name="twitter:description" content="The official corporate site of Free Cattle, Inc." />
	<meta name="twitter:image" content="https://freecattle.com/og.png" />
	<meta name="twitter:image:alt" content="Free Cattle" />
	<meta name="twitter:image:width" content="512" />
	<meta name="twitter:image:height" content="512" />
	<link rel="shortcut icon" href="/favicon.svg" />
	<link rel="icon" href="/favicon.svg" />
	<link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
	<link rel="icon" href="/favicons/favicon-32x32.png" sizes="32x32" />
	<link rel="icon" href="/favicons/favicon-16x16.png" sizes="16x16" />
	<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" sizes="180x180" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Free Cattle" />
</svelte:head>

<div class="flex flex-col h-screen w-full">
	<Navbar />
	<Home />
	<Footer />
</div>
