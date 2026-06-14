<script lang="ts">
  import { profile, contacts } from '../data';
  import Icon from './Icon.svelte';

  const github = contacts.find((c) => c.icon === 'github');
</script>

<footer class="footer">
  <div class="container">
    <p>
      © {new Date().getFullYear()} {profile.name}. Built with Svelte.
      {#if github}
        ·
        <a href={github.href} target="_blank" rel="noreferrer">
          <Icon name="github" size={14} />
          GitHub
        </a>
      {/if}
    </p>
  </div>
</footer>

<style>
  .footer {
    padding: 2rem 1.5rem;
    border-top: 1px solid var(--border);
    text-align: center;
  }

  .container {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  p {
    color: var(--muted);
    font-size: 0.9rem;
    margin: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.35rem;
    flex-wrap: wrap;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
