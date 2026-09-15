<script setup lang="ts">
import { profile } from '../data/profile'
</script>

<template>
  <section class="skills" id="skills" aria-labelledby="skills-heading">
    <p class="section-no">02 · 技能</p>
    <h2 id="skills-heading">技能</h2>
    <table>
      <thead>
        <tr>
          <th scope="col">技术域</th>
          <th scope="col">覆盖点</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in profile.skills" :key="row.domain">
          <td>{{ row.domain }}</td>
          <td>{{ row.detail }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--line);
  background: var(--paper-raised);
  font-size: 0.95rem;
}

th,
td {
  border: 1px solid var(--line);
  padding: 12px 16px;
  text-align: left;
  line-height: 1.7;
}

thead th {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 400;
  color: var(--ink-dim);
  background: var(--paper);
}

tbody th[scope='row'] {
  white-space: nowrap;
}

tbody td:first-child {
  color: var(--ink);
  font-weight: 500;
}

@media (max-width: 640px) {
  th,
  td {
    padding: 10px 12px;
  }
}
</style>
