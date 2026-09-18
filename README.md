# shanchahuaA.github.io

我的个人作品集网站，发布在 https://shanchahuaA.github.io。

## 这是什么

一个 Vue 3 + Vite + TypeScript 的单页静态站点，浅色极简的「工程图纸」风格：内容按五张「图纸」排布（项目、技能、关于、联系），项目卡片的图位目前是内联 SVG 架构线框图，之后会替换成真实截图。

内容与组件分离：改作品集内容只需要动两个数据文件（页签标题与描述在 `index.html`，改名时顺手改那里）：

- `src/data/profile.ts` — 姓名、介绍、技能表、联系方式
- `src/data/projects.ts` — 项目清单、描述、技术栈标签、仓库链接

更新网站的流程：改这两个文件里的任意一个 → `git push` → GitHub Actions 自动构建并部署（见 `.github/workflows/deploy.yml`）。

## 本地开发

```bash
npm install
npm run dev      # 本地预览 http://localhost:5173
npm run build    # 产出 dist/
```

## 它是怎么上线的

推送到 `main` 分支时，GitHub Actions 会：

1. `npm ci` 安装依赖（依赖 Node 24）
2. `npm run build` 构建（`vue-tsc` 类型检查 + Vite 打包）
3. `upload-pages-artifact` 把 `dist/` 打包上传
4. `deploy-pages` 发布到 GitHub Pages

所以日常更新网站只需要 `git push`，不需要本地构建。

## 目录结构

```
├── .github/workflows/deploy.yml   # 自动部署流水线
├── index.html                      # 唯一 HTML 入口
└── src/
    ├── App.vue                     # 五区块装配
    ├── style.css                   # 全局样式与设计基调
    ├── data/                       # 全站仅有的两个数据文件
    │   ├── profile.ts              # 个人信息（技能表也在里面）
    │   └── projects.ts             # 项目卡片数据
    └── components/
        ├── SiteHero.vue            # 首屏 + 标题栏表格
        ├── ProjectsSection.vue     # 01 项目
        ├── ProjectCard.vue         # 项目卡
        ├── ProjectFigure.vue       # 占位线框图（Fig.1/2/3）
        ├── SkillsSection.vue       # 02 技能
        ├── AboutSection.vue        # 03 关于
        └── ContactSection.vue      # 04 联系
```

## 已知事项

- 简历定稿前，个人信息字段是可替换的占位值（数据文件里已注明每个字段的来源）。
- 项目卡片的前两张直链各自公开的源码仓库；第三张（Minecraft 模组）是占位卡，仓库尚未定是否公开。
- 真实截图到位后，把图片放进 `public/screenshots/`、在 `projects.ts` 的 `image` 字段填路径即可，卡片自动从占位图切换为截图。
