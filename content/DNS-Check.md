---
title: DNS-Check
description: DNS-Check 是一个基于 Go 的 DNS 性能测试工具，从查询延迟、TCP 连接延迟及 IP 访问速度三个维度评估 DNS 性能，并通过加权评分进行排序。
category: Tool
projectUrl: https://github.com/mogumc/DNS-Check
imageUrl: /images/808c5311.png
date: 2025-07-30 14:59:37
techStack:
  - name: "Go"
    icon: "GoLang.svg"
    url: "https://go.dev"
---

## 功能特性

- **多维度评估**：综合查询延迟 (Query)、TCP Ping 延迟 (Ping) 和 IP 访问速度 (Connect) 三个维度。
- **加权评分系统**：采用加权机制，输出 DNS 服务器的综合性能排序。
- **并发测试**：支持批量并发测试，快速得出结果。
- **高可定制**：支持自定义目标测试域名，适应不同网络场景。

## 项目说明

本项目旨在提供一个客观的 DNS 性能测试方案，不仅仅关注单一的延迟指标，而是通过加权评估综合性能，帮助用户发现最适合其网络环境的 DNS 配置。
