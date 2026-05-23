---
title: Komari-MCP-Server
description: Komari-MCP-Server 是一个基于 Go 开发的 Komari 服务器监控 API 的 MCP 服务器，支持 stdio 和 HTTP 传输模式，为 AI 提供节点监控数据。
category: AI
projectUrl: https://github.com/mogumc/Komari-MCP-Server
imageUrl: /images/a63f9b31.webp
date: 2026-05-19 14:17:49
techStack:
  - name: "Go"
    icon: "GoLang.svg"
    url: "https://go.dev"
  - name: "Docker"
    icon: "Docker.svg"
    url: "https://docker.com"
---
## 功能特性

- **多传输模式**：支持 Stdio (本地集成) 和 HTTP (远程部署) 传输。
- **监控数据集成**：提供节点名称、状态、CPU、内存、磁盘、网络等多维度监控数据接口。
- **易部署**：支持 Docker 构建部署。

## 项目结构

```
Komari-MCP-Server/
├── cmd/
│   └── server/      # 服务入口
├── auth/            # 鉴权逻辑
├── transport/       # 传输模式处理 (stdio/http)
├── mcp/             # MCP 协议实现
├── utils/           # 工具函数
├── Dockerfile       # Docker 部署配置
└── README.md        # 项目说明
```
