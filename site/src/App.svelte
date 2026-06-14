<script lang="ts">
  import Header from './lib/components/Header.svelte';
  import Hero from './lib/components/Hero.svelte';
  import Highlights from './lib/components/Highlights.svelte';
  import Experience from './lib/components/Experience.svelte';
  import Projects from './lib/components/Projects.svelte';
  import Education from './lib/components/Education.svelte';
  import Skills from './lib/components/Skills.svelte';
  import Contact from './lib/components/Contact.svelte';
  import Footer from './lib/components/Footer.svelte';
</script>

<a class="skip-link" href="#main">Skip to main content</a>
<Header />
<main id="main">
  <Hero />
  <Highlights />
  <Experience />
  <Projects />
  <Education />
  <Skills />
  <Contact />
</main>
<Footer />
