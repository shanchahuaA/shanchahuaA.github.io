<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { profile } from '../data/profile'

/** 档案号的最终值，也是这段一次性动画的落点 */
const FINAL = '2026-01'
const fileNo = ref('0000')

/** 页面加载后从 0000 滚到 2026-01，只跑一次 */
onMounted(() => {
  // 系统开了「减弱动态效果」就直接显示最终值，不做动画
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    fileNo.value = FINAL
    return
  }
  const steps = 9
  let i = 0
  const step = () => {
    i += 1
    // 中间帧按进度换算，最后一次精确落在 FINAL 上
    fileNo.value = i === steps ? FINAL : String(Math.round(2026 * (i / steps))).padStart(4, '0')
    if (i < steps) setTimeout(step, 70 + (i - 1) * 12)
  }
  setTimeout(step, 120)
})
</script>

<template>
  <header class="hero">
    <nav class="nav" aria-label="页面导航">
      <a href="#projects">项目</a>
      <a href="#skills">技能</a>
      <a href="#about">关于</a>
      <a href="#contact">联系</a>
    </nav>

    <div class="hero-row">
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
    </div>
  </header>
</template>

<style scoped>
.hero {
  display: grid;
  gap: clamp(56px, 12vh, 112px);
  padding-block: clamp(40px, 8vh, 64px) clamp(72px, 12vh, 120px);
}

.nav {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 8px 28px;
  font-family: var(--font-mono);
  font-size: 0.8rem;
}

.nav a {
  color: var(--ink-dim);
  text-decoration: none;
}

.nav a:hover {
  color: var(--accent);
}

.hero-row {
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
  .hero-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }

  .nav {
    justify-content: flex-start;
  }
}
</style>