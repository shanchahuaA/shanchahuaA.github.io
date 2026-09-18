/**
 * 项目数据模块。
 *
 * 每张项目卡片渲染一条记录：
 * - figure 决定用哪张占位线框图（Fig.1 / Fig.2 / Fig.3）；
 * - image 一旦填入真实截图路径，卡片会自动改用 <img> 显示截图，组件不用改；
 * - repoUrl 为 null 表示仓库暂未公开，卡片显示「仓库待公开」。
 *
 * 描述文字基于代码事实写成，不含夸大。
 */

export type FigureKey = 'stream' | 'defense' | 'mod'

export interface Project {
  id: string
  name: string
  oneLiner: string
  description: string
  features: string[]
  stack: string[]
  repoUrl: string | null
  figure: FigureKey
  image: string | null
}

/** 「项目」区块开头的一句说明。改这里，不动组件。 */
export const projectsNote =
  '前两个项目的源码都已在 GitHub 上公开——每个仓库里都有 README、建库脚本，以及一份如实写着未完成部分的已知问题清单。'

export const projects: Project[] = [
  {
    id: 'stream',
    name: 'Stream 游戏信息平台',
    oneLiner: 'Java Web + Python 微服务的游戏折扣聚合平台',
    description:
      'Java Servlet + MyBatis + MySQL 的 Web 应用，聚合 Steam 特惠、热销榜和 Epic 限时免费游戏。后端用 ProcessBuilder 拉起本地 Python（FastAPI）爬虫服务，经 HTTP 接口取数、fastjson 解析后写入数据库；另有一个独立的 Python AI 导购助手服务，用自然语言提问、由大模型按意图调用工具（Steam 官方接口查价、读本应用自己的榜单推荐好价、搜游戏风评）。',
    features: [
      'Steam 特惠与热销榜浏览',
      'Epic 限时免费游戏专区',
      '游戏列表筛选与排序',
      '会员收藏管理',
      'AI 导购助手',
      '登录注册与头像上传',
      '管理员用户与游戏管理',
      '爬虫控制台与周一自检同步',
    ],
    stack: [
      'Java 8',
      'Servlet',
      'MyBatis',
      'PageHelper',
      'MySQL 8',
      'fastjson',
      'Python',
      'FastAPI',
      'BeautifulSoup',
    ],
    repoUrl: 'https://github.com/shanchahuaA/stream-game-platform',
    figure: 'stream',
    // ← 截图拍好后填入路径，如 '/screenshots/stream.png'，占位图自动停用
    image: null,
  },
  {
    id: 'defense',
    name: '毕业答辩管理系统',
    oneLiner: '面向高校本科毕业答辩的全流程成绩管理系统',
    description:
      'Spring Boot 3 + Vue 3 + Element Plus 的前后端分离系统，管理院系答辩从分组、小组评分、大组终评到成绩汇总的全流程。JWT + Spring Security 按角色鉴权（超级管理员 / 院系管理员 / 教师），组长身份由答辩分组数据决定；综合成绩按指导 30% / 评阅 30% / 答辩 40% 加权合成，组长端可用大模型（通义千问）生成小组评语。文档导出页的按钮目前只弹提示、不会真的下载文件，这条已如实写进 README 的已知问题一节。',
    features: [
      'JWT 登录与角色权限',
      '院系、教师、学生管理',
      '答辩小组与评分指标配置',
      '小组在线评分取均分',
      '大组终评与加权综合成绩',
      '组长 AI 评语生成',
      '答辩年份切换',
    ],
    stack: [
      'Java 17',
      'Spring Boot 3',
      'Spring Security',
      'JWT',
      'JPA + MySQL',
      'Vue 3',
      'Element Plus',
      'Pinia',
      'poi-tl',
    ],
    repoUrl: 'https://github.com/shanchahuaA/defense-system',
    figure: 'defense',
    // ← 截图拍好后填入路径
    image: null,
  },
  {
    id: 'minecraft-mod',
    name: 'Minecraft 模组',
    oneLiner: '个人项目 · 开发中',
    description: '一个 Minecraft Java 版模组，正在开发中。完成后这里会补上功能介绍和仓库链接。',
    features: [],
    stack: ['Java'],
    // 仓库尚未决定是否公开
    repoUrl: null,
    figure: 'mod',
    image: null,
  },
]
