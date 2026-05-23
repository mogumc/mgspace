---
title: Scaner
description: Scaner 是一个轻量级的 Go 语言编写的网段 HTTP 扫描器，支持并发扫描指定 CIDR 网段内 IP 的端口，获取 HTTP 响应详情并支持结果导出。
category: Tool
projectUrl: https://github.com/mogumc/Scaner
imageUrl: /images/c6b388d2.png
date: 2025-09-11 14:16:05
techStack:
  - name: "Go"
    icon: "GoLang.svg"
    url: "https://go.dev"
---

## 功能特性

- **高效并发**：支持高并发扫描 CIDR 网段，提升扫描效率。
- **响应分析**：详细解析 HTTP 状态码、Server 头、页面大小及网页标题。
- **灵活输出**：支持控制台实时显示及扫描结果文件保存。

## 项目说明

本项目旨在提供一个简单高效的网段 HTTP 扫描工具，方便开发者对特定网络环境进行快速探测与 Web 资产发现。
