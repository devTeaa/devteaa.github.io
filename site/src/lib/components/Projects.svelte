<script lang="ts">
  import { projects } from '../data';
  import Icon from './Icon.svelte';
</script>

<section id="projects" class="projects">
  <div class="container">
    <h2>Side Projects</h2>
    <div class="cards">
      {#each projects as project}
        <article class="card">
          <h3>{project.title}</h3>
          <p class="description">{project.description}</p>
          <ul class="tech">
            {#each project.tech as t}
              <li>{t}</li>
            {/each}
          </ul>
          {#if project.links}
            <div class="links">
              {#each project.links as link}
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                  <Icon name="link" size={14} />
                </a>
              {/each}
            </div>
          {/if}
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .projects {
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
    color: var(--heading);
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.25rem;
  }

  .card {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .description {
    margin: 0;
    color: var(--muted);
    line-height: 1.6;
    font-size: 0.95rem;
  }

  .tech {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech li {
    background: color-mix(in srgb, var(--accent) 10%, transparent);
    color: var(--text);
    font-size: 0.85rem;
    padding: 0.3rem 0.7rem;
    border-radius: 999px;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: auto;
  }

  .links a {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.9rem;
    font-weight: 500;
    text-decoration: none;
  }

  .links a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .projects {
      padding: 3.5rem 1.25rem;
    }
  }
</style>
