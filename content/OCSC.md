---
title: OCSC
description: OCS Copilot (OCSC) 是一个用于 OCS 网课助手的本地大模型代理服务，支持将 OpenAI 协议请求转发到本地大模型，并进行结构化输出约束。
category: Tool
projectUrl: https://github.com/mogumc/OCSC
imageUrl: /images/d47b91cf.png
date: 2026-04-30 11:14:19
techStack:
  - name: "Go"
    icon: "GoLang.svg"
    url: "https://go.dev"
---

## 功能特性

- **OpenAI 兼容接口**：提供 `/v1/chat/completions` 接口。
- **结构化输出**：强制模型输出 JSON 格式，并支持答案结构化解析。
- **自动重试**：支持解析失败自动重试（`MAX_RETRIES`）。
- **轻量易用**：本地大模型桥接，降低部署门槛。

## 项目结构

```
ocs-ai-proxy/
├── main.go                # 服务入口
├── go.mod                 # Go 模块定义
├── internal/
│   ├── config/            # 配置加载
│   ├── handler/           # HTTP 处理器
│   ├── model/             # 数据结构
│   └── proxy/             # 代理核心逻辑
└── Makefile               # 构建脚本
```
