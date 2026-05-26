---
title: BaiduQRlogin
description: BaiduQRlogin 是一个基于 Go 编写的百度系通用扫码工具，用于获取 BDUSS 和 PTOKEN，仅供流程参考和学习使用。
category: Tool
projectUrl: https://github.com/mogumc/BaiduQRlogin
imageUrl: https://t.alcy.cc/ycy/?p=BaiduQRlogin
date: 2026-04-14 13:55:33
techStack:
  - name: "Go"
    icon: "GoLang.svg"
    url: "https://go.dev"
---

## 功能特性

- 百度系通用扫码获取登录凭证（BDUSS/PTOKEN）
- 流程清晰，适合作为学习参考
- 支持获取 PTOKEN（每个产品 STOKEN 不同，需使用 PTOKEN 获取）

## 项目结构

```
BaiduQRlogin/
├── auth/            # 登录认证逻辑
├── qrcode/          # 二维码生成处理
├── utils/           # 工具函数
├── main.go          # 主程序入口
├── go.mod           # Go 模块定义
└── README.md        # 项目说明
```
