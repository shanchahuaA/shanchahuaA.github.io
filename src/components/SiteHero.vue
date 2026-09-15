<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { profile } from '../data/profile'

/** 档案号从 0000 滚到 2026-01，页面加载后只跑一次 */
const fileNo = ref('0000')

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    fileNo.value = '2026-01'
    return
  }
  const el = document.querySelector('.titleblock .file-no')
  const frames = [
    '0000', '0177', '0391', '0624', '0902', '1188', '1459', '1732', '1976', '2026-01',
  ]
  let i = 0
  const step = () => {
    fileNo.value = frames[i]
    i += 1
    if (i < frames.length) setTimeout(step, 70 + (i - 1) * 12)
  }
  setTimeout(step, 120)
  void el
})
</script>

<template>
  <header class="hero" id="top">
    <div class="hero-head">
      <p class="meta-line">// {{ profile.role }}</p>
      <h1>{{ profile.name }}</h1>
      <p class="intro">{{ profile.intro }}</p>
    </div>

    <aside class="titleblock" aria-label="网站档案">
      <table>
        <tbody>
          <tr>
            <th scope="row">档案号</th>
            <td class="file-no">{{ fileNo }}</td>
          </tr>
          <tr>
            <th scope="row">图幅</th>
            <td>A · 单页滚动</td>
          </tr>
          <tr>
            <th scope="row">绘制</th>
            <td>{{ profile.name }} 本人</td>
          </tr>
        </tbody>
      </table>
    </aside>
  </header>
</template>

<style scoped>
.hero {
  position: relative;
  padding-block: clamp(96px, 18vh, 160px) clamp(72px, 12vh, 120px);
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  justify-content: space-between;
  align-items: flex-end;
}

.meta-line {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--ink-dim);
  margin: 0 0 20px;
}

h1 {
  font-size: clamp(40px, 7vw, 72px);
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 1.1;
  margin: 0;
  color: var(--ink);
}

.intro {
  margin: 28px 0 0;
  max-width: 34em;
  font-size: 1.1rem;
  line-height: 1.9;
  color: var(--ink-body);
}

.titleblock {
  flex: 0 0 auto;
  font-family: var(--font-mono);
  font-size: 0.78rem;
}

.titleblock table {
  border-collapse: collapse;
  border: 1px solid var(--line);
  background: var(--paper-raised);
}

.titleblock th,
.titleblock td {
  border: 1px solid var(--line);
  padding: 10px 14px;
  text-align: left;
}

.titleblock th {
  color: var(--ink-dim);
  font-weight: 400;
  white-space: nowrap;
}

.file-no {
  color: var(--accent);
  font-variant-numeric: tabular-nums;
}

@media (max-width: 640px) {
  .hero {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }
}
</style>
