<script lang="ts">
  import { experiences } from '../data';
</script>

<section id="experience" class="experience">
  <div class="container">
    <h2>Work Experience</h2>
    <div class="timeline">
      {#each experiences as job}
        <article class="job">
          <div class="meta">
            <span class="period">{job.period}</span>
            <span class="type">{job.type}</span>
          </div>
          <div class="content">
            <h3>{job.role}</h3>
            <p class="company">{job.company} · {job.location}</p>
            <ul>
              {#each job.highlights as highlight}
                <li>{highlight}</li>
              {/each}
            </ul>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .experience {
    padding: 5rem 1.5rem;
  }

  .container {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  h2 {
    font-size: 2rem;
    margin: 0 0 2.5rem;
  }

  .timeline {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .job {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 2rem;
  }

  .meta {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: right;
  }

  .period {
    font-size: 0.9rem;
    color: var(--muted);
    font-weight: 500;
  }

  .type {
    font-size: 0.8rem;
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 12%, transparent);
    padding: 0.25rem 0.6rem;
    border-radius: 999px;
    width: fit-content;
    margin-left: auto;
  }

  .content {
    border-left: 2px solid var(--border);
    padding-left: 2rem;
  }

  h3 {
    font-size: 1.25rem;
    margin: 0 0 0.25rem;
    color: var(--heading);
  }

  .company {
    color: var(--muted);
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  li {
    position: relative;
    padding-left: 1.25rem;
    color: var(--text);
    line-height: 1.6;
  }

  li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--accent);
    font-weight: 700;
  }

  @media (max-width: 768px) {
    .experience {
      padding: 3.5rem 1.25rem;
    }

    .job {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .meta {
      text-align: left;
      flex-direction: row;
      align-items: center;
    }

    .type {
      margin-left: 0;
    }

    .content {
      border-left: none;
      padding-left: 0;
    }
  }
</style>
