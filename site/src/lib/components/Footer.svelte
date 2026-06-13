<script lang="ts">
  import { profile } from '../data';
</script>

<footer class="footer">
  <div class="container">
    <p>© {new Date().getFullYear()} {profile.name}. Built with Svelte.</p>
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
  }
</style>
