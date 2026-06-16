<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<a class="skip-link" href="#main">Skip to main content</a>
<div class="app">
	<Header />
	<slot />
	<Footer />
</div>
