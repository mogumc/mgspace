---
title: OpenMoGuQAQ
description: OpenMoGuQAQ 是一个全栈工程化开发助手 Skill，通过智能路由机制管理不同的执行层（架构、实现、审查、迭代），确保 AI 输出符合工程稳健性与技术规范。
category: AI
projectUrl: https://github.com/mogumc/OpenMoGuQAQ
imageUrl: https://t.alcy.cc/ycy/?p=OpenMoGuQAQ
date: 2026-04-29 12:52:51
techStack:
  - name: "GitHub"
    icon: "Github-Dark.svg"
    url: "https://github.com"
---

## 功能特性

- **智能路由决策**：基于触发词智能选择架构、实现、审查或迭代层。
- **层级规范隔离**：严格区分不同执行阶段的规范，避免上下文混用。
- **工具保障层 (ToolGuard)**：自动化校验工具调用结果，防止无效响应。
- **工程化约束**：提供明确的行为准则、输出模板及冲突仲裁机制。

## 项目结构

```
OpenMoGuQAQ/
├── architecture.md       # 架构设计规范
├── implementation.md     # 代码实现规范
├── review.md             # 代码审查规范
├── iteration.md          # 迭代与债务管理
├── toolguard.md          # 工具调用保障
└── SKILL.md              # 技能主文件
```
