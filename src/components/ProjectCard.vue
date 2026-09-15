<script setup lang="ts">
import type { Project } from '../data/projects'
import ProjectFigure from './ProjectFigure.vue'

defineProps<{ project: Project; index: number }>()
</script>

<template>
  <article class="project" :class="{ reserved: project.repoUrl === null }">
    <div class="figure-wrap">
      <ProjectFigure :figure="project.figure" :image="project.image" />
    </div>
    <div class="body">
      <h3>{{ project.name }}</h3>
      <p class="one-liner">{{ project.oneLiner }}</p>
      <p class="desc">{{ project.description }}</p>
      <ul class="features" v-if="project.features.length">
        <li v-for="f in project.features" :key="f">{{ f }}</li>
      </ul>
      <p class="stack">
        <span class="tag" v-for="s in project.stack" :key="s">{{ s }}</span>
      </p>
      <p class="repo">
        <a v-if="project.repoUrl" :href="project.repoUrl" target="_blank" rel="noopener">
          查看源码仓库
        </a>
        <span v-else class="repo-pending">仓库待公开</span>
      </p>
    </div>
  </article>
</template>

<style scoped>
.project {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: 40px;
  border: 1px solid var(--line);
  background: var(--paper-raised);
  padding: 28px;
  margin-block: 0;
}

.project:nth-child(even) {
  transform: translateX(24px);
}

/* 第三张预留卡：内容排布相同，视觉弱化为虚线 */
.project.reserved {
  border-style: dashed;
}

.figure-wrap {
  align-self: start;
}

h3 {
  margin: 0;
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--ink);
}

.one-liner {
  margin: 8px 0 16px;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--ink-dim);
}

.desc {
  margin: 0 0 20px;
  line-height: 1.9;
  color: var(--ink-body);
}

.features {
  list-style: none;
  margin: 0 0 20px;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(11em, 1fr));
  gap: 8px 24px;
  font-size: 0.92rem;
  color: var(--ink-body);
}

.features li::before {
  content: '';
  display: inline-block;
  width: 5px;
  height: 5px;
  background: var(--accent);
  margin-right: 10px;
  vertical-align: 0.15em;
}

.tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--ink-dim);
  border: 1px solid var(--line);
  padding: 3px 10px;
  margin: 0 8px 8px 0;
}

.repo {
  margin: 16px 0 0;
}

.repo a {
  color: var(--accent);
  text-decoration: none;
  font-size: 0.95rem;
}

.repo a:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.repo-pending {
  font-size: 0.85rem;
  color: var(--ink-dim);
}

@media (max-width: 760px) {
  .project {
    grid-template-columns: 1fr;
    padding: 20px;
  }

  .project:nth-child(even) {
    transform: none;
  }
}
</style>
