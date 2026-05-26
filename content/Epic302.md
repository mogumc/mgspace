---
title: Epic302
description: Epic302 是一个轻量级 Go 编写的代理工具，通过劫持并转发 Epic Games 启动器的下载请求至固定 CDN 节点，实现无缝加速下载。
category: Tool
projectUrl: https://github.com/mogumc/Epic302
imageUrl: https://t.alcy.cc/ycy/?p=Epic302
date: 2025-12-12 19:59:56
techStack:
  - name: "Go"
    icon: "GoLang.svg"
    url: "https://go.dev"
---

## 功能特性

- **零配置加速**：自动修改系统 Hosts 并劫持请求，无需修改客户端设置。
- **无缝转发**：保持原始请求路径与 Header，确保下载兼容性。
- **高性能**：采用轻量级 Go 实现，针对下载场景优化。

## 项目说明

本项目旨在解决 Epic Games 启动器在中国大陆或其他网络环境下下载速度慢的问题，提供了一种简单高效的本地代理加速方案。
