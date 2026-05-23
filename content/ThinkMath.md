---
title: ThinkMath
description: ThinkMath 是一个数学建模全链路自动化执行 Skill，支持从问题解析、模型建立、代码求解、数据可视化到标准论文输出的完整闭环。
category: AI
projectUrl: https://github.com/mogumc/ThinkMath
imageUrl: /images/030222ae.png
date: 2026-05-11 20:09:29
techStack:
  - name: "Python"
    icon: "Python-Dark.svg"
    url: "https://python.org"
  - name: "LaTeX"
    icon: "LaTeX-Dark.svg"
    url: "https://latex-project.org"
---

## 功能特性

- **全链路自动化**：从问题解析到论文输出的完整流程。
- **六层架构**：清晰的层级划分，确保每个环节的专业性。
- **质量控制**：数据异常自动检测，确保结果正确性。
- **标准论文**：使用 cumcmthesis 模板生成符合竞赛要求的论文。

## 项目结构

```
ThinkMath/
├── LICENSE                    # CC BY-NC-SA 4.0 许可证
├── SKILL.md                   # 技能主文件，定义执行规范
├── references/                # 参考文档目录
└── tools/                     # 工具目录
    ├── cumcmthesis.cls        # 论文模板类文件
    └── ...
```
