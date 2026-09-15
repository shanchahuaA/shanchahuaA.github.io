/**
 * 个人信息数据模块。
 *
 * 这是全站唯一需要随简历更新的文件之一（另一个是 projects.ts）：
 * 简历定稿后，把真名、自我介绍、技能表和联系方式填进来，
 * `git push` 后 GitHub Actions 会自动重新构建部署，组件一行都不用改。
 *
 * 目前所有字段都是占位值——每条的注释标明了它对应简历的哪一部分，
 * 也都刻意避开了无法核实的具体说法（届别、个人/小组完成等），
 * 等简历定稿后再按事实补充。
 */

export interface SkillRow {
  /** 技术域，表格左列 */
  domain: string
  /** 覆盖点，表格右列 */
  detail: string
}

export interface Profile {
  name: string
  role: string
  intro: string
  about: string[]
  skills: SkillRow[]
  github: string
  email: string | null
  contactNote: string
}

export const profile: Profile = {
  // 姓名：当前用 GitHub 用户名占位，简历定稿后换成真名（来源：简历「姓名」）
  name: 'shanchahuaA',

  // 求职方向，显示在 Hero 标题上方（来源：简历「求职意向」，届别等细节定稿后补充）
  role: 'Java 后端方向',

  // Hero 一句话介绍，控制在两行以内（来源：简历「个人简介」开头两句）
  intro: '下面两个项目，都能从数据库表结构一路看到前端页面。我习惯把一个系统一条链路做到底。',

  // 「关于」区块的正文段落（来源：简历「自我评价」，定稿后整段替换）
  about: [
    '我在校期间做过两个系统：一个聚合游戏优惠信息的 Web 平台，一个管理校园答辩流程的成绩系统。两个都是从表结构设计、后端接口到前端页面走完的。',
    '我给自己定的规矩是：项目交付时带上架构说明、建库脚本和已知问题清单——能讲清楚自己写的代码，和把它写出来一样重要。',
  ],

  // 技能表：整页唯一的表格，两列（来源：简历「专业技能」，逐行对应）
  // 目前只列两个项目里真实用到的技术，定稿后按简历补充
  skills: [
    { domain: 'Java', detail: 'Java 8 / 17，Servlet，JDBC' },
    { domain: '后端框架', detail: 'Spring Boot 3，Spring Security（JWT 鉴权），MyBatis' },
    { domain: '数据库', detail: 'MySQL，JPA' },
    { domain: '前端', detail: 'HTML / CSS / JavaScript，Vue 3，Element Plus，Vite' },
    { domain: 'Python', detail: 'FastAPI，requests + BeautifulSoup 爬虫' },
    { domain: '工程工具', detail: 'Maven，npm，Git，GitHub Actions 自动部署' },
  ],

  // 联系方式（来源：简历「联系方式」）
  github: 'https://github.com/shanchahuaA',
  // 简历定稿后填入邮箱；为 null 时「联系」区块不显示邮箱行
  email: null,
  // 邮箱未填时显示的占位说明，填入 email 后这行自动消失
  contactNote: '邮箱与电话见简历',
}