<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Highlights from '$lib/components/Highlights.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Education from '$lib/components/Education.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<svelte:head>
	<title>Herman — Software Design Engineer</title>
	<meta
		name="description"
		content="Portfolio of Herman, a Software Design Engineer specialising in scalable frontend systems, SSR frameworks, micro-frontends and CI/CD."
	/>
</svelte:head>

<main id="main">
	<Hero />
	<Highlights />
	<Experience />
	<Projects />
	<Education />
	<Skills />
	<Contact />
</main>
