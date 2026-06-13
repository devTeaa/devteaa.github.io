<script lang="ts">
  import { achievements } from '../data';
</script>

<section id="about" class="about">
  <div class="container">
    <h2>About me</h2>
    <div class="grid">
      <div class="intro">
        <p>
          Over the past 7+ years I've built multiple enterprise projects on the .NET stack, now
          developing products for an e-commerce platform — from internal platforms at Pertamina to
          high-traffic e-commerce frontends at Blibli.com. I care about the full lifecycle of a product — from rendering
          strategy and micro-frontend boundaries to deployment pipelines and production
          observability.
        </p>
        <p>
          My master's research in computer vision and deep learning taught me to approach complex
          problems methodically, and I bring that same mindset to frontend architecture: whether
          it's shaving seconds off page loads or designing systems that scale across teams.
        </p>
      </div>
      <div class="achievements">
        <h3>Highlights</h3>
        <ul>
          {#each achievements as item}
            <li>{item}</li>
          {/each}
        </ul>
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

  .achievements ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .achievements li {
    position: relative;
    padding-left: 1.5rem;
    color: var(--muted);
    line-height: 1.6;
  }

  .achievements li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.45rem;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: var(--accent);
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
