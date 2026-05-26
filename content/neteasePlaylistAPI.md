---
title: neteasePlaylistAPI
description: neteasePlaylistAPI 是一个基于 Go 构建的 API 处理服务，用于解析网易云音乐播放列表并输出歌词与歌曲信息，常搭配 home 项目使用。
category: API
projectUrl: https://github.com/mogumc/neteasePlaylistAPI
imageUrl: https://t.alcy.cc/ycy/?p=neteasePlaylistAPI
date: 2025-08-08 17:16:17
techStack:
  - name: "Go"
    icon: "GoLang.svg"
    url: "https://go.dev"
---

## 功能特性

- **数据解析**：利用 NeteaseCloudMusicApi 解析播放列表。
- **结构化输出**：标准化歌词与歌曲信息输出，便于前端集成。
- **场景配套**：专为 home 主页项目设计，优化音乐数据获取体验。

## 项目说明

本项目旨在提供一个轻量级的前置 API 处理服务，旨在通过代理官方 API 获取数据并进行必要的标准化处理，以便于个人主页等场景直接调用。
