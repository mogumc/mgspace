---
title: KinhWebEO
description: KinhWebEO 是一个基于 Next.js 和 WeUI 的百度网盘文件站，支持文件列表浏览、文件下载、图片/视频/音频在线预览、文件搜索等功能。 后端使用 Go 编写，部署在 EdgeOne 云函数上，移动端响应式设计。
category: Web
projectUrl: https://github.com/mogumc/KinhWebEO
imageUrl: /images/cffe0465.jpg
date: 2026-05-21 12:01:34
techStack:
  - name: "Go"
    icon: "GoLang.svg"
    url: "https://go.dev"
  - name: "Next.js"
    icon: "NextJS-Dark.svg"
    url: "https://nextjs.org"
  - name: "WeUI"
    url: "https://weui.io"
---

## 功能特性

- 文件列表浏览
- 文件下载（支持 302 重定向）
- 图片/视频/音频在线预览
- 文件搜索
- 支持本地解析和远程解析两种模式
- 移动端响应式设计

## 项目结构

```
KinhWebEO/
├── cloud-functions/          # Go 云函数后端
│   ├── index.go              # 入口文件
│   ├── handler/              # API 处理器
│   │   ├── config.go         # 配置接口
│   │   ├── down.go           # 下载接口
│   │   ├── list.go           # 文件列表
│   │   └── search.go         # 搜索接口
│   ├── config/               # 配置管理（环境变量）
│   ├── utils/                # 工具函数
│   └── result/               # 响应格式
├── src/                      # Next.js 前端
│   ├── app/                  # 页面路由
│   ├── components/           # React 组件
│   └── lib/                  # API 封装和工具函数
└── .edgeone/                 # EdgeOne 配置（自动生成）
```