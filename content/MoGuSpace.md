---
title: MoGuSpace
description: MoGuSpace 是一个基于 Next.js 和 Material UI 的个人项目展示网站，采用响应式设计和现代 UI 组件，支持 Markdown 项目详情页和丰富的交互动画。
category: Web
projectUrl: https://github.com/mogumc/MoGuSpace
imageUrl: /images/0bebdecd.png
date: 2026-05-22 18:47:12
techStack:
  - name: "React"
    icon: "React-Dark.svg"
    url: "https://react.dev"
  - name: "Material UI"
    icon: "Material-UI.svg"
    url: "https://mui.com"
  - name: "Next.js"
    icon: "Nextjs.svg"
    url: "https://nextjs.org"
  - name: "Vercel"
    icon: "Vercel.svg"
    url: "https://vercel.com"
---


## 功能特性

- 响应式网格布局：xs 1列 / sm 2列 / lg 3列 / xl 4列
- 项目按分类 (category) 自动分组，Sidebar 侧边栏快速导航
- 滚动触发背景虚化与彩色→黑白渐变
- Sticky 顶部导航栏，下滑隐藏上滑显示
- 明暗主题切换
- 页面过渡动画
- 移动端抽屉菜单 + Sidebar 自动隐藏
- 技能图标展示（内置 404 个技术 SVG 图标，支持 Dark/Light 变体）
- 项目详情页，支持 Markdown 渲染 + 目录导航 (TOC)
- SEO 优化（Open Graph + Twitter Card 元数据）

## 项目结构

```
├── content/                        # 内容目录
│   ├── config.yml                  # 站点配置（名称、技能、社交、友链等）
│   └── *.md                        # 项目 Markdown 文件
├── icons/                          # 技术图标（404 个 SVG）
├── public/                         # 静态资源
│   ├── bg.webp                     # 全局背景图
│   ├── logo.png                    # Logo
│   └── logo_bg.png                 # Logo 背景
├── src/
│   ├── app/
│   │   ├── layout.tsx              # 根布局（Theme + 背景层 + 导航）
│   │   ├── page.tsx                # 首页（Intro + Skills + Projects）
│   │   ├── not-found.tsx           # 404 页面
│   │   └── projects/[slug]/page.tsx # 项目详情动态路由
│   ├── components/                 # UI 组件
│   │   ├── Background.tsx          # 背景组件
│   │   ├── BackgroundLayer.tsx     # 背景图层
│   │   ├── BackToHome.tsx          # 返回首页按钮
│   │   ├── Footer.tsx              # 页脚
│   │   ├── HeroContainer.tsx       # 主容器
│   │   ├── Intro.tsx               # 个人介绍区
│   │   ├── Navbar.tsx              # 顶部导航栏
│   │   ├── PageTransitionProvider.tsx # 页面过渡动画
│   │   ├── ProjectCard.tsx         # 项目卡片
│   │   ├── ProjectCarousel.tsx     # 项目轮播
│   │   ├── ProjectInfo.tsx         # 项目信息
│   │   ├── ProjectToc.tsx          # 项目目录
│   │   ├── Sidebar.tsx             # 分类侧边栏
│   │   ├── SkillSection.tsx        # 技能展示
│   │   ├── SocialHeader.tsx        # 社交头部
│   │   ├── SocialLinks.tsx         # 社交链接
│   │   ├── TechStackBox.tsx        # 技术栈展示
│   │   └── ThemeProvider.tsx       # 主题切换
│   ├── lib/
│   │   ├── config.server.ts        # 读取 config.yml
│   │   ├── icons.server.ts         # 读取 SVG 图标
│   │   └── projects.ts             # 解析 Markdown 项目数据
│   └── theme/
│       └── theme.ts                # MUI 主题定义
├── next.config.ts                  # Next.js 配置
├── eslint.config.mjs               # ESLint 配置
└── package.json
```