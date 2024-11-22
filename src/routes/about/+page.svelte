<script lang="ts">
	import Navbar from '../../components/Navbar.svelte';
	import About from '../../components/About.svelte';
	import Footer from '../../components/Footer.svelte';
</script>

<svelte:head>
	<title>About | Free Cattle</title>
	<meta name="description" content="About Free Cattle" />
	<meta name="author" content="Free Cattle, Inc." />
	<meta name="theme-color" content="#ffffff" />
	<meta property="og:title" content="About | Free Cattle" />
	<meta property="og:description" content="About Free Cattle" />
	<meta property="og:url" content="https://freecattle.com/about" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="About | Free Cattle" />
	<meta name="twitter:description" content="About Free Cattle" />
	<link rel="shortcut icon" href="/favicon.svg" />
	<link rel="icon" href="/favicon.svg" />
	<link rel="icon" href="/favicons/favicon-32x32.png" sizes="32x32" />
	<link rel="icon" href="/favicons/favicon-16x16.png" sizes="16x16" />
	<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#ffffff" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Free Cattle, Inc." />
</svelte:head>

<div class="flex flex-col h-screen w-full">
	<Navbar />
	<About />
	<Footer />
</div>
