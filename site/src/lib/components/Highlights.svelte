<script lang="ts">
  import { achievements } from '../data';
</script>

<section id="highlights" class="highlights">
  <div class="container">
    <h2>Highlights</h2>
    <div class="items">
      {#each achievements as item}
        <article class="item" class:no-bullets={item.bullets.length === 0}>
          <div class="lead">
            {#if item.href}
              <h3>
                <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a>
              </h3>
            {:else}
              <h3>{item.title}</h3>
            {/if}
            <p class="description">{item.description}</p>
          </div>
          {#if item.bullets.length}
            <ul class="bullet-list">
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

  .items {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .item {
    display: grid;
    grid-template-columns: 1fr 1.75fr;
    gap: 2rem;
    align-items: start;
    background: var(--background);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.5rem;
  }

  .item.no-bullets {
    grid-template-columns: 1fr;
  }

  .lead {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  h3 {
    font-size: 1.1rem;
    margin: 0;
    color: var(--accent);
  }

  h3 a {
    color: inherit;
    text-decoration: none;
  }

  h3 a:hover {
    text-decoration: underline;
  }

  .description {
    margin: 0;
    color: var(--muted);
    line-height: 1.6;
    font-size: 0.95rem;
  }

  .bullet-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }

  .bullet-list li {
    background: color-mix(in srgb, var(--accent) 10%, transparent);
    color: var(--text);
    font-size: 0.9rem;
    line-height: 1.4;
    padding: 0.45rem 0.8rem;
    border-radius: 999px;
  }

  @media (max-width: 768px) {
    .highlights {
      padding: 3.5rem 1.25rem;
    }

    .item {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }
  }
</style>
