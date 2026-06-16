<script lang="ts">
  import { skillGroups } from '../data';
</script>

<section id="skills" class="skills">
  <div class="container">
    <h2>Skills & Technologies</h2>
    <div class="groups">
      {#each skillGroups as group}
        <div class="group">
          <h3>{group.name}</h3>
          <ul class="tags">
            {#each group.skills as skill}
              <li class="tag">{skill}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .skills {
    padding: 5rem 1.5rem;
  }

  .container {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  h2 {
    font-size: 2rem;
    margin: 0 0 2rem;
  }

  .groups {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
  }

  .group h3 {
    font-size: 1rem;
    color: var(--heading);
    margin: 0 0 1rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }

  .tag {
    display: inline-flex;
    padding: 0.45rem 0.85rem;
    border-radius: 999px;
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--text);
    font-size: 0.9rem;
    font-weight: 500;
    transition: border-color 0.2s, color 0.2s;
    cursor: default;
  }

  .tag:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  @media (max-width: 768px) {
    .skills {
      padding: 3.5rem 1.25rem;
    }
  }
</style>
