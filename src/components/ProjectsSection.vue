<script setup lang="ts">
import { projects, projectsNote } from '../data/projects'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section class="projects" id="projects" aria-labelledby="projects-heading">
    <p class="section-no">01 · 项目</p>
    <h2 id="projects-heading">项目</h2>
    <p class="note">{{ projectsNote }}</p>
    <div class="list">
      <ProjectCard v-for="p in projects" :key="p.id" :project="p" />
    </div>
  </section>
</template>

<style scoped>
.note {
  margin: 0 0 40px;
  color: var(--ink-dim);
  font-size: 0.95rem;
  line-height: 1.8;
}

.list {
  display: grid;
  gap: 48px;
}
</style>
