<!--
  项目卡片的图位：有截图就显示截图，没有就用内联 SVG 线框图占位。
  三张图各对应一个项目（stream / defense / mod），由 project.figure 选择；
  截图拍好后在 projects.ts 里给 image 填路径，这里会自动改显示 <img>，不用改组件。
-->
<script setup lang="ts">
import type { FigureKey } from '../data/projects'

const props = defineProps<{ figure: FigureKey; image: string | null }>()

const captions: Record<FigureKey, string> = {
  stream: 'Fig.1 GameStream · 数据通路',
  defense: 'Fig.2 答辩管理 · 前后端装配',
  mod: 'Fig.3 Minecraft 模组 · 预留',
}
</script>

<template>
  <figure class="figure">
    <!-- 有截图就显示截图；没有就用内联 SVG 线框图占位（对应 projects.ts 里的 image 字段） -->
    <img v-if="props.image !== null" :src="props.image" :alt="captions[props.figure]" />
    <svg v-else-if="props.figure === 'stream'" viewBox="0 0 480 360" role="img"
      aria-label="GameStream 架构线框图：浏览器经过 Servlet、业务层、数据访问层到数据库，另有 Python 爬虫从外部取数" class="drawing">
      <g class="stroke">
        <!-- 浏览器窗口 -->
        <rect x="12" y="34" width="88" height="62" rx="2" />
        <circle cx="22" cy="44" r="2.5" />
        <circle cx="31" cy="44" r="2.5" />
        <circle cx="40" cy="44" r="2.5" />
        <line x1="50" y1="44" x2="92" y2="44" />
        <line x1="22" y1="62" x2="88" y2="62" />
        <line x1="22" y1="74" x2="72" y2="74" />

        <!-- 三层柱：Servlet / 业务层 / DAO -->
        <rect x="150" y="22" width="66" height="30" rx="2" />
        <rect x="150" y="86" width="66" height="30" rx="2" />
        <rect x="150" y="150" width="66" height="30" rx="2" />

        <!-- 浏览器到 Servlet 的折线 + 节点 -->
        <polyline points="100,65 118,65 118,37 150,37" />
        <rect x="114" y="33" width="8" height="8" />
        <!-- 层间连线（双向） -->
        <line x1="183" y1="52" x2="183" y2="86" />
        <rect x="179" y="65" width="8" height="8" />
        <line x1="183" y1="116" x2="183" y2="150" />
        <rect x="179" y="129" width="8" height="8" />

        <!-- 数据库圆柱 -->
        <ellipse cx="183" cy="228" rx="38" ry="12" />
        <path d="M145,228 v44 a38,12 0 0 0 76,0 v-44" />
        <ellipse cx="183" cy="272" rx="38" ry="12" />

        <!-- DAO 到数据库 -->
        <line x1="183" y1="180" x2="183" y2="216" />
        <rect x="179" y="194" width="8" height="8" />

        <!-- 爬虫节点：同心圆 + 放射线，从右侧进数据库 -->
        <circle cx="330" cy="250" r="14" />
        <circle cx="330" cy="250" r="5" fill="var(--accent)" stroke="none" opacity="0.9" />
        <line x1="330" y1="228" x2="330" y2="236" />
        <line x1="330" y1="264" x2="330" y2="272" />
        <line x1="308" y1="250" x2="316" y2="250" />
        <line x1="344" y1="250" x2="352" y2="250" />
        <rect x="348" y="246" width="8" height="8" />
        <!-- 爬虫 → 数据库 -->
        <polyline points="316,250 300,250 300,284 221,284" />
        <!-- 外部数据源（虚线表示互联网） -->
        <line x1="356" y1="250" x2="420" y2="250" class="dashed" />
        <rect x="420" y="236" width="46" height="28" rx="2" class="dashed" />
        <line x1="428" y1="250" x2="452" y2="250" class="dashed" />

        <!-- 图内小字标注 -->
        <g class="label">
          <text x="56" y="118">浏览器</text>
          <text x="183" y="41" text-anchor="middle">Servlet</text>
          <text x="183" y="105" text-anchor="middle">业务层</text>
          <text x="183" y="169" text-anchor="middle">MyBatis</text>
          <text x="183" y="252" text-anchor="middle">MySQL</text>
          <text x="330" y="300" text-anchor="middle">Python 爬虫</text>
          <text x="443" y="284" text-anchor="middle">外部站点</text>
        </g>
      </g>
    </svg>

    <!-- Fig.2 装配关系：Vue 前端与 Spring 后端经 REST 边界拧在一起 -->
    <svg v-else-if="props.figure === 'defense'" viewBox="0 0 480 360" role="img"
      aria-label="答辩管理系统装配图：左侧 Vue 页面、Element Plus 组件、请求接口三层，与右侧 Controller、Service、Repository 三层，经 REST 边界对接" class="drawing">
      <g class="stroke">
        <!-- 左半：前端三层，浅色底 -->
        <rect x="30" y="40" width="120" height="34" rx="2" class="fill" />
        <rect x="30" y="104" width="120" height="34" rx="2" class="fill" />
        <rect x="30" y="168" width="120" height="34" rx="2" class="fill" />

        <!-- 右半：后端三层，空描边 -->
        <rect x="330" y="40" width="120" height="34" rx="2" />
        <rect x="330" y="104" width="120" height="34" rx="2" />
        <rect x="330" y="168" width="120" height="34" rx="2" />

        <!-- REST 边界：中间粗线 -->
        <line x1="240" y1="24" x2="240" y2="218" class="boundary" />

        <!-- 螺栓：边界上的六边形 -->
        <polygon points="240,60 248,64 248,72 240,76 232,72 232,64" />
        <polygon points="240,120 248,124 248,132 240,136 232,132 232,124" />
        <polygon points="240,180 248,184 248,192 240,196 232,192 232,184" />

        <!-- 层间短折线（左） -->
        <line x1="90" y1="74" x2="90" y2="104" />
        <line x1="90" y1="138" x2="90" y2="168" />
        <!-- 层间短折线（右） -->
        <line x1="390" y1="74" x2="390" y2="104" />
        <line x1="390" y1="138" x2="390" y2="168" />

        <!-- 贯穿请求流：页面 → 接口 → 边界 → Controller（配对连接） -->
        <polyline points="150,57 172,57 172,26 262,26 262,57 330,57" />
        <polyline points="150,121 172,121 172,112 262,112 262,121 330,121" />
        <polyline points="150,185 172,185 172,204 262,204 262,185 330,185" />

        <!-- 底部：数据库圆柱（双方共同落点） -->
        <ellipse cx="240" cy="284" rx="44" ry="13" />
        <path d="M196,284 v34 a44,13 0 0 0 88,0 v-34" />
        <line x1="390" y1="202" x2="390" y2="284" />
        <polyline points="390,284 284,284" />
        <rect x="386" y="240" width="8" height="8" />

        <g class="label">
          <text x="90" y="63" text-anchor="middle">Vue 页面</text>
          <text x="90" y="127" text-anchor="middle">Element Plus</text>
          <text x="90" y="191" text-anchor="middle">请求接口</text>
          <text x="390" y="63" text-anchor="middle">Controller</text>
          <text x="390" y="127" text-anchor="middle">Service</text>
          <text x="390" y="191" text-anchor="middle">Repository</text>
          <text x="240" y="316" text-anchor="middle">MySQL · JWT 鉴权</text>
          <text x="240" y="18" text-anchor="middle" class="mono">REST API</text>
        </g>
      </g>
    </svg>

    <!-- Fig.3 模组预留 -->
    <svg v-else viewBox="0 0 480 360" role="img" aria-label="预留图位，将来放 Minecraft 模组介绍" class="drawing">
      <g class="stroke">
        <rect x="60" y="60" width="360" height="240" rx="2" class="dashed" />
        <!-- 方块体的轴测线框：模组的母题 -->
        <g class="cube">
          <rect x="190" y="130" width="90" height="90" />
          <polyline points="190,130 160,100 250,100 280,130" />
          <polyline points="250,100 250,190 280,220 280,130" />
          <line x1="280" y1="220" x2="190" y2="220" class="dashed" />
          <line x1="160" y1="100" x2="160" y2="190" class="dashed" />
          <line x1="160" y1="190" x2="190" y2="220" class="dashed" />
        </g>
        <g class="label">
          <text x="240" y="250" text-anchor="middle">模组开发中 · 图纸预留</text>
        </g>
      </g>
    </svg>

    <figcaption class="caption">{{ captions[props.figure] }}</figcaption>
  </figure>
</template>

<style scoped>
.figure {
  margin: 0;
  border: 1px solid var(--line);
  background: var(--paper-raised);
}

.drawing {
  display: block;
  width: 100%;
  height: auto;
}

.stroke {
  stroke: var(--line-strong);
  stroke-width: 1.5;
  fill: none;
  vector-effect: non-scaling-stroke;
}

.fill {
  fill: var(--accent);
  fill-opacity: 0.06;
}

.boundary {
  stroke: var(--accent);
  stroke-width: 2;
}

.dashed {
  stroke-dasharray: 5 4;
}

.label text {
  font-family: var(--font-mono);
  font-size: 11px;
  fill: var(--ink-dim);
  stroke: none;
}

.label .mono {
  fill: var(--accent);
}

img {
  display: block;
  width: 100%;
  height: auto;
}

.caption {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--ink-dim);
  padding: 8px 12px;
  border-top: 1px solid var(--line);
}
</style>
