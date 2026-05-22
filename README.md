# MoGuSpace

一个基于 Next.js + Material UI 的极简几何风格个人作品集。

## 技术栈

- **框架**: Next.js (App Router + SSG)
- **UI**: Material UI v6
- **动画**: Framer Motion
- **样式**: Emotion (CSS-in-JS)
- **配置**: YAML (js-yaml)
- **内容**: Markdown (gray-matter)

## 功能特性

- 响应式布局：手机1列、平板2列、桌面3-4列
- 滚动触发背景虚化与彩色→黑白渐变
- Sticky侧边栏导航，支持项目分类
- 响应式顶部导航栏，下滑隐藏上滑显示
- 移动端全屏抽屉菜单

## 项目结构

```
├── content/              # 内容目录
│   ├── config.yml        # 站点配置（名称、社交链接等）
│   └── *.md              # 项目 Markdown 文件
├── public/               # 静态资源
│   └── bg.webp           # 背景图片
├── src/
│   ├── app/
│   │   ├── layout.tsx    # 根布局
│   │   └── page.tsx      # 首页
│   ├── components/
│   │   ├── HeroContainer.tsx    # 背景图层与滚动动效
│   │   ├── Navbar.tsx           # 顶部导航栏
│   │   ├── Sidebar.tsx          # 侧边栏导航
│   │   ├── ProjectCard.tsx      # 项目卡片
│   │   ├── SkillSection.tsx     # 技能展示
│   │   └── SocialLinks.tsx      # 社交链接
│   ├── lib/
│   │   ├── config.server.ts     # 服务端配置加载
│   │   └── projects.ts          # 项目数据解析
│   └── theme/
│       └── theme.ts             # MUI 主题
├── next.config.ts
├── tsconfig.json
└── package.json
```

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建静态站点
npm run build
```

## 配置说明

编辑 `content/config.yml`：

```yaml
name: "YOUR NAME"
title: "My Portfolio"
description: "A minimal geometric portfolio"
social:
  github: "https://github.com/yourname"
  twitter: "https://twitter.com/yourname"
  blog: "https://yourblog.com"
```

## 添加项目

在 `content/` 目录下创建 Markdown 文件：

```markdown
---
title: 项目名称
description: 项目描述
imageUrl: /project-image.png
date: 2026-01-01
category: Web
---

项目详情内容...
```

## License

MIT
