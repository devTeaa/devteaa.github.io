<script lang="ts">
  import { profile, contacts } from '../data';
  import Icon from './Icon.svelte';
</script>

<section id="top" class="hero">
  <div class="container">
    <p class="eyebrow">{profile.title}</p>
    <h1>{profile.name}</h1>
    <p class="summary">{profile.summary}</p>

    <div class="actions">
      <a class="btn btn-primary" href={profile.resumeUrl} download>
        <Icon name="download" size={18} />
        Download CV
      </a>
      <a class="btn btn-secondary" href="#contact" onclick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
        Get in touch
        <Icon name="arrow" size={18} />
      </a>
    </div>

    <div class="quick-contacts">
      {#each contacts.slice(0, 2) as contact}
        <a class="chip" href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}>
          <Icon name={contact.icon} size={16} />
          <span>{contact.value}</span>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .hero {
    padding: 6rem 1.5rem 5rem;
  }

  .container {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .eyebrow {
    color: var(--accent);
    font-weight: 600;
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 0 0 1rem;
  }

  h1 {
    font-size: clamp(2.75rem, 8vw, 5rem);
    line-height: 1.05;
    letter-spacing: -2px;
    margin: 0 0 1.5rem;
    background: linear-gradient(120deg, var(--heading) 30%, var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .summary {
    font-size: 1.15rem;
    line-height: 1.7;
    color: var(--muted);
    max-width: 720px;
    margin: 0 0 2.25rem;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.85rem 1.4rem;
    border-radius: 999px;
    font-weight: 600;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .btn:hover {
    transform: translateY(-2px);
  }

  .btn-primary {
    background: var(--accent);
    color: #fff;
    box-shadow: 0 8px 24px color-mix(in srgb, var(--accent) 30%, transparent);
  }

  .btn-primary:hover {
    box-shadow: 0 12px 32px color-mix(in srgb, var(--accent) 45%, transparent);
  }

  .btn-secondary {
    background: var(--surface);
    color: var(--heading);
    border: 1px solid var(--border);
  }

  .quick-contacts {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.9rem;
    border-radius: 999px;
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--muted);
    font-size: 0.9rem;
    text-decoration: none;
    transition: border-color 0.2s, color 0.2s;
  }

  .chip:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  @media (max-width: 768px) {
    .hero {
      padding: 4rem 1.25rem 3.5rem;
    }
  }
</style>
