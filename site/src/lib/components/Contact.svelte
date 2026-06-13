<script lang="ts">
  import { contacts, profile } from '../data';
  import Icon from './Icon.svelte';
</script>

<section id="contact" class="contact">
  <div class="container">
    <h2>Let’s work together</h2>
    <p class="lead">
      I’m open to engineering leadership, frontend architecture, and product-building opportunities.
      Reach out and let’s talk.
    </p>

    <div class="cards">
      {#each contacts as contact}
        <a
          class="card"
          href={contact.href}
          target={contact.href.startsWith('http') ? '_blank' : undefined}
          rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
        >
          <Icon name={contact.icon} size={24} />
          <div>
            <span class="label">{contact.label}</span>
            <span class="value">{contact.value}</span>
          </div>
        </a>
      {/each}
    </div>

    <a class="btn btn-primary" href={profile.resumeUrl} download>
      <Icon name="download" size={18} />
      Download CV
    </a>
  </div>
</section>

<style>
  .contact {
    padding: 5rem 1.5rem;
    background: var(--surface);
    border-top: 1px solid var(--border);
    text-align: center;
  }

  .container {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  h2 {
    font-size: 2rem;
    margin: 0 0 1rem;
  }

  .lead {
    color: var(--muted);
    font-size: 1.1rem;
    max-width: 560px;
    margin: 0 auto 2.5rem;
    line-height: 1.6;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    color: inherit;
    text-decoration: none;
    text-align: left;
    transition: transform 0.2s, border-color 0.2s;
  }

  .card:hover {
    transform: translateY(-3px);
    border-color: var(--accent);
  }

  .card :global(svg) {
    color: var(--accent);
    flex-shrink: 0;
  }

  .label {
    display: block;
    font-size: 0.8rem;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.15rem;
  }

  .value {
    display: block;
    color: var(--heading);
    font-weight: 500;
    font-size: 0.95rem;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.85rem 1.4rem;
    border-radius: 999px;
    font-weight: 600;
    text-decoration: none;
    background: var(--accent);
    color: #fff;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px color-mix(in srgb, var(--accent) 45%, transparent);
  }

  @media (max-width: 768px) {
    .contact {
      padding: 3.5rem 1.25rem;
    }
  }
</style>
