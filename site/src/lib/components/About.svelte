<script lang="ts">
  import { profile, achievements } from '../data';
</script>

<section id="about" class="about">
  <div class="container">
    <h2>About me</h2>
    <div class="grid">
      <div class="intro">
        <p>
          {profile.summary}
        </p>
        <p>
          Over the past 7+ years I’ve worked across the full product lifecycle — from enterprise
          internal portals at Pertamina to high-traffic e-commerce frontends at Blibli.com. I care
          about rendering strategy, micro-frontend boundaries, deployment pipelines, and production
          observability.
        </p>
        <p>
          My master’s research in computer vision and deep learning taught me to approach complex
          problems methodically, and I bring that same mindset to frontend architecture: whether
          it’s shaving seconds off page loads or designing systems that scale across teams.
        </p>
      </div>
      <div class="achievements">
        <h3>Highlights</h3>
        <div class="cards">
          {#each achievements as item}
            <article class="card">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </article>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .about {
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
    font-size: 1.15rem;
    margin: 0 0 1rem;
    color: var(--heading);
  }

  h4 {
    font-size: 1rem;
    margin: 0 0 0.5rem;
    color: var(--heading);
  }

  .grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 3rem;
  }

  .intro {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    color: var(--muted);
    line-height: 1.7;
    font-size: 1.05rem;
  }

  .cards {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .card {
    background: var(--background);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.25rem;
  }

  .card h4 {
    color: var(--accent);
  }

  .card p {
    margin: 0;
    color: var(--muted);
    line-height: 1.6;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    .about {
      padding: 3.5rem 1.25rem;
    }

    .grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
</style>
