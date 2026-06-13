<script lang="ts">
  import { achievements } from '../data';
</script>

<section id="highlights" class="highlights">
  <div class="container">
    <h2>Highlights</h2>
    <div class="cards">
      {#each achievements as item}
        <article class="card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .highlights {
    padding: 5rem 1.5rem;
    background: var(--surface);
    border-block: 1px solid var(--border);
  }

  .container {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  h2 {
    font-size: 2rem;
    margin: 0 0 2rem;
  }

  h3 {
    font-size: 1.05rem;
    margin: 0 0 0.5rem;
    color: var(--heading);
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }

  .card {
    background: var(--background);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.5rem;
  }

  .card h3 {
    color: var(--accent);
  }

  .card p {
    margin: 0;
    color: var(--muted);
    line-height: 1.6;
    font-size: 0.95rem;
  }

  @media (max-width: 900px) {
    .cards {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .highlights {
      padding: 3.5rem 1.25rem;
    }
  }
</style>
