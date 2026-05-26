---
title: Gemini2OpenAI
description: Gemini2OpenAI 是一个将 Google Gemini API 转换为 OpenAI 兼容格式的工具，方便在现有 OpenAI 生态应用中使用 Gemini 模型。
category: AI
projectUrl: https://github.com/mogumc/Gemini2OpenAI
imageUrl: https://t.alcy.cc/ycy/?p=Gemini2OpenAI
date: 2026-05-26 17:40:00
techStack:
  - name: "Go"
    url: "https://go.dev"
---

## 项目概述

Gemini2OpenAI 提供了一个轻量级的 API 转发层，支持将 Gemini API 的请求转化为标准的 OpenAI API 格式。通过部署此服务，用户可以无缝对接支持 OpenAI API 的客户端与工具。

## 功能特性

- API 格式转换：实现 Gemini API 到 OpenAI 兼容 API 的映射。
- 部署简便：基于 Go 编写，支持多种平台部署。
- 支持流式输出（Streaming）：确保与原有 GPT 类应用良好的兼容性。
- 配置灵活：支持通过环境变量配置 API Key 及转发设置。
