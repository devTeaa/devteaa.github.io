<script lang="ts">
  import { educations } from '../data';
</script>

<section id="education" class="education">
  <div class="container">
    <h2>Education</h2>
    <div class="cards">
      {#each educations as edu}
        <article class="card">
          <div class="header">
            <div>
              <h3>{edu.school}</h3>
              <p class="degree">{edu.degree}</p>
            </div>
            <span class="gpa">{edu.gpa}</span>
          </div>
          <p class="period">{edu.location} · {edu.period}</p>
          {#if edu.thesis}
            <p class="thesis"><strong>Thesis:</strong> {edu.thesis}</p>
          {/if}
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .education {
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

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
  }

  .card {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.75rem;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow);
  }

  .header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.75rem;
  }

  h3 {
    font-size: 1.15rem;
    margin: 0 0 0.25rem;
    color: var(--heading);
  }

  .degree {
    color: var(--accent);
    font-weight: 600;
    font-size: 0.95rem;
    margin: 0;
  }

  .gpa {
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--heading);
    background: color-mix(in srgb, var(--accent) 15%, transparent);
    padding: 0.35rem 0.65rem;
    border-radius: 6px;
    white-space: nowrap;
  }

  .period {
    color: var(--muted);
    font-size: 0.9rem;
    margin: 0 0 1rem;
  }

  .thesis {
    color: var(--text);
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 768px) {
    .education {
      padding: 3.5rem 1.25rem;
    }
  }
</style>
