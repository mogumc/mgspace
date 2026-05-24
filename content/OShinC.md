---
title: OShinC
description: Go + Lua 脚本执行引擎，提供安全沙箱环境和权限控制，支持 CLI 直接调用和 FFI 共享库调用两种接入方式。
category: Tool
projectUrl: https://github.com/OShinTeam/OShinC
imageUrl: /images/003aace4.webp
author: OShinTeam
date: 2026-05-11 13:01:46
techStack:
  - name: "Go"
    icon: "GoLang.svg"
    url: "https://go.dev"
  - name: "Lua"
    icon: "Lua-Dark.svg"
    url: "https://www.lua.org"
  - name: "C"
    icon: "C.svg"
---

## 架构设计

```
OShinC/
├── plugin/
│   ├── core.go      # 执行引擎 (Lua 脚本执行、内置函数注册)
│   └── sandbox.go   # 安全沙箱 (权限模型、脚本验证、环境隔离)
├── cmd/
│   ├── cli/         # 命令行工具 (直接调用 plugin 包)
│   └── ffi/         # FFI 共享库 (cgo 导出 C 接口)
└── test/
    ├── oshin_core.py        # Python 调用封装 (ctypes)
    ├── example.py           # Python 调用示例
    └── test_permission.py   # 权限系统测试
```

## 安全模型

脚本通过 `request_permission()` 主动请求权限，宿主程序通过回调决定是否允许。支持预授权白名单、宿主回调、静态 AST 检测三层防护。

### 权限类型

| 权限类型     | 说明                           | 管控函数                                  |
|--------------|--------------------------------|-------------------------------------------|
| `exec`       | 执行外部程序                   | `execute_external()`                      |
| `network`    | 网络访问                       | `http_request()`                          |
| `file_read`  | 读取本地文件                   | `read_file()`                             |
| `file_write` | 写入本地文件                   | `write_file()`                            |
| `system`     | 系统操作                       | `os.execute()`, `os.exit()`, `os.getenv()` 等 |

### 权限请求流程

1. 脚本调用 `request_permission(type, description)`
2. 沙箱检查预授权白名单 → 命中则直接放行
3. 否则调用宿主程序回调 → 由宿主程序决定
4. 无回调且未预授权 → 默认拒绝

### 静态检测（AST 解析）

- 拒绝 `load()`, `dofile()`, `loadfile()`, `loadstring()` 等危险函数
- 拒绝访问 `debug`, `io`, `package` 等危险全局变量
- 拒绝通过 `_G["load"]` 等方式绕过检测

## 调用方式

### Go 直接调用

```go
import "oshin-core/plugin"

core := plugin.NewCore()
resp := core.Execute(plugin.PluginRequest{
    Script: `function main(params) return {sum = params.a + params.b} end`,
    Params: map[string]interface{}{"a": 10, "b": 20},
    Mode:   "direct",
})
```

### CLI 命令行

支持直接执行、交互模式、JSON 模式（stdin/stdout，适合脚本编排和 CI/CD）。

### FFI 共享库

通过 cgo 编译为 DLL，导出 C 接口供 Python、Node、Swift 等语言调用。支持权限回调和配置注入。

## 执行模式

| 模式        | 说明                             |
|-------------|----------------------------------|
| `direct`    | 直接调用 `main(params)`          |
| `route`     | 通过 `routes` 表按 action 路由    |
| `pipeline`  | 执行 `pipeline(params)` 管道     |

## 内置 Lua 函数

- **基础**: `request_permission`, `http_request`, `execute_external`, `read_file`, `write_file`, `json_parse`, `json_stringify`, `log`
- **编码/哈希**: `url_encode/decode`, `md5`, `sha1`, `sha256`, `base64_encode/decode`, `hex_encode/decode`
- **os 包**: 安全函数（`os.time`, `os.date`）无需权限，危险函数（`os.execute`, `os.exit` 等）需 `system` 权限
