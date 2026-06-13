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
          <p class="description">{item.description}</p>
          {#if item.bullets.length}
            <ul>
              {#each item.bullets as bullet}
                <li>{bullet}</li>
              {/each}
            </ul>
          {/if}
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
    font-size: 1.1rem;
    margin: 0 0 0.5rem;
    color: var(--accent);
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    align-items: start;
  }

  .card {
    background: var(--background);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.5rem;
  }

  .description {
    margin: 0 0 1rem;
    color: var(--muted);
    line-height: 1.6;
    font-size: 0.95rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  li {
    position: relative;
    padding-left: 1.1rem;
    color: var(--muted);
    font-size: 0.9rem;
    line-height: 1.5;
  }

  li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--accent);
    font-weight: 700;
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
