<script setup lang="ts">
import { profile } from '../data/profile'
</script>

<template>
  <section class="about" id="about" aria-labelledby="about-heading">
    <p class="section-no">03 · 关于</p>
    <h2 id="about-heading">关于</h2>
    <p v-for="(para, i) in profile.about" :key="i">{{ para }}</p>
  </section>
</template>

<style scoped>
p {
  margin: 0 0 1.4em;
  max-width: 40em;
  line-height: 1.9;
  color: var(--ink-body);
}

p:last-child {
  margin-bottom: 0;
}
</style>
