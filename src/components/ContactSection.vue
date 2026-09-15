<script setup lang="ts">
import { profile } from '../data/profile'
</script>

<template>
  <section class="contact" id="contact" aria-labelledby="contact-heading">
    <p class="section-no">04 · 联系</p>
    <h2 id="contact-heading">联系</h2>
    <p class="lead">项目还在持续整理，欢迎通过 GitHub 找到我。</p>
    <dl class="contact-list">
      <div class="row">
        <dt>GitHub</dt>
        <dd><a :href="profile.github" target="_blank" rel="noopener">{{ profile.github.replace('https://', '') }}</a></dd>
      </div>
      <div class="row" v-if="profile.email">
        <dt>邮箱</dt>
        <dd><a :href="`mailto:${profile.email}`">{{ profile.email }}</a></dd>
      </div>
      <div class="row" v-else>
        <dt>邮箱</dt>
        <dd class="pending">{{ profile.contactNote }}</dd>
      </div>
    </dl>
    <footer class="colophon">
      <p>本站由 Vue 3 + Vite 构建，GitHub Actions 自动部署。手写于 2026 年。</p>
    </footer>
  </section>
</template>

<style scoped>
.lead {
  margin: 0 0 32px;
  line-height: 1.9;
  color: var(--ink-body);
}

.contact-list {
  margin: 0;
  border: 1px solid var(--line);
  background: var(--paper-raised);
}

.row {
  display: grid;
  grid-template-columns: 96px 1fr;
  border-bottom: 1px solid var(--line);
}

.row:last-child {
  border-bottom: none;
}

dt {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--ink-dim);
  padding: 14px 16px;
  border-right: 1px solid var(--line);
}

dd {
  margin: 0;
  padding: 14px 16px;
  font-variant-numeric: tabular-nums;
}

dd a {
  color: var(--accent);
  text-decoration: none;
}

dd a:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.pending {
  color: var(--ink-dim);
}

.colophon {
  margin-top: 96px;
}

.colophon p {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--ink-dim);
}

@media (max-width: 640px) {
  .row {
    grid-template-columns: 76px 1fr;
  }
}
</style>
