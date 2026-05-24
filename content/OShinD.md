---
title: OShinD
description: Go 编写的跨平台多线程下载器，支持 HTTP/HTTPS/FTP/SFTP 协议，断点续传、多源 CDN 加速、文件校验，提供 CLI 和 FFI 两种使用方式。
category: Tool
projectUrl: https://github.com/OShinTeam/OShinD
imageUrl: /images/003aace4.webp
author: OShinTeam
date: 2026-05-13 13:46:17
techStack:
  - name: "Go"
    icon: "GoLang.svg"
    url: "https://go.dev"
  - name: "C"
    icon: "C.svg"
  - name: "Make"
    icon: "CMake-Dark.svg"
---

## 功能特性

- 多协议支持 — HTTP/HTTPS/FTP/SFTP
- 多线程分片下载 — 最多 64 个并发连接
- 断点续传 — 自动保存下载状态，中断后可继续
- Ctrl+C 暂停 — 按下后输出详细摘要，重新运行即可续传
- 自定义请求头 — 支持 `-H` 参数，适用于鉴权、防盗链等场景
- 多来源下载 — 支持多个 CDN 同时下载同一文件
- 文件校验 — 自动探测并校验 MD5/SHA256
- Protobuf 状态持久化 — 高效的二进制状态文件格式

## 快速开始

```bash
# 构建 CLI
cd src && go build -o oshind.exe ./cmd/cli/

# 下载文件
./oshind.exe dl https://example.com/file.zip

# 使用 8 个并发 + 自定义请求头
./oshind.exe dl https://example.com/file.zip -c 8 -H "Authorization: Bearer token"
```

## 项目结构

```
OShinD/
├── .github/          # GitHub 配置（CI/CD）
├── docs/
│   ├── README-en.md  # 英文版 README
│   ├── cli-guide.md  # CLI 使用指南
│   ├── ffi-api.md    # FFI 接口文档
│   ├── build-guide.md# 构建指南
│   └── architecture.md# 架构设计
├── src/
│   └── cmd/
│       └── cli/      # CLI 入口
└── LICENSE           # AGPL-3.0
```

## 接口方式

| 特性     | CLI 命令行          | FFI 共享库                    |
|----------|---------------------|-------------------------------|
| 调用方式 | 命令行参数          | 函数调用（C/Python/Swift）    |
| 适用场景 | 日常下载、脚本编排  | 应用内嵌入、第三方集成        |
| 构建命令 | `make build-cli`    | `make build-ffi`              |

## 技术细节

| 维度       | 详情                          |
|------------|-------------------------------|
| 支持协议   | HTTP、HTTPS、FTP、SFTP        |
| 最大并发   | 64 个连接                     |
| 断点续传   | Protobuf 二进制状态文件       |
| 校验算法   | MD5、SHA256（自动探测）       |
| 许可证     | AGPL-3.0                      |
