<script lang="ts">
  import Icon from './Icon.svelte';

  let open = $state(false);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  function scrollToId(id: string) {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    open = false;
  }
</script>

<header class="site-header">
  <div class="container">
    <a class="logo" href="#top" onclick={(e) => { e.preventDefault(); scrollToId('#top'); }}>
      Herman.
    </a>

    <nav class="desktop-nav" aria-label="Main">
      {#each links as link}
        <a href={link.href} onclick={(e) => { e.preventDefault(); scrollToId(link.href); }}>
          {link.label}
        </a>
      {/each}
    </nav>

    <button
      class="menu-toggle"
      aria-label="Toggle menu"
      aria-expanded={open}
      onclick={() => open = !open}
    >
      <Icon name={open ? 'close' : 'menu'} size={24} />
    </button>
  </div>

  {#if open}
    <nav class="mobile-nav" aria-label="Mobile">
      {#each links as link}
        <a href={link.href} onclick={(e) => { e.preventDefault(); scrollToId(link.href); }}>
          {link.label}
        </a>
      {/each}
    </nav>
  {/if}
</header>

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: color-mix(in srgb, var(--bg) 85%, transparent);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border);
  }

  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--heading);
    text-decoration: none;
    letter-spacing: -0.5px;
  }

  .desktop-nav {
    display: flex;
    gap: 1.75rem;
  }

  .desktop-nav a,
  .mobile-nav a {
    color: var(--muted);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    transition: color 0.2s;
  }

  .desktop-nav a:hover,
  .mobile-nav a:hover {
    color: var(--accent);
  }

  .menu-toggle {
    display: none;
    background: none;
    border: none;
    color: var(--heading);
    cursor: pointer;
    padding: 0.25rem;
  }

  .mobile-nav {
    display: none;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 1.5rem 1.5rem;
    border-top: 1px solid var(--border);
  }

  @media (max-width: 768px) {
    .desktop-nav {
      display: none;
    }

    .menu-toggle {
      display: block;
    }

    .mobile-nav {
      display: flex;
    }
  }
</style>
