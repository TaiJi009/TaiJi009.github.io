# 张滨 · 个人网站

张滨（Zhang Bin）的个人主页，用于展示 AIGC 与 AI 设计相关作品、技能与经历，并提供联系方式。

**在线访问：[https://taiji009.github.io/](https://taiji009.github.io/)**

## 项目简介

本站采用单页滚动布局，包含首页、关于、技能、经历、联系等模块，视觉风格以莫兰迪低饱和配色为主，强调画廊感与作品优先的展示体验。

主要特性：

- 中英双语切换
- 深色 / 浅色主题
- 响应式布局，适配移动端与桌面端
- 基于 GSAP 的轻量文字与交互动效

## 技术栈

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://gsap.com/)

## 项目结构

```
├── frontend/     # 前端源码（React + Vite + TypeScript）
├── docs/         # 构建产物（GitHub Pages 发布目录）
├── Intro/        # 项目规划与说明文档
└── stitch/       # 设计稿与原型
```

## 本地开发

在 `frontend/` 目录下操作，或在仓库根目录使用便捷脚本：

```bash
# 方式一：进入 frontend 目录
cd frontend
npm install
npm run dev

# 方式二：在根目录直接运行（会自动转发到 frontend）
npm install --prefix frontend
npm run dev
```

常用命令：

```bash
npm run dev      # 启动开发服务器
npm run build    # 构建生产版本（输出至根目录 docs/）
npm run preview  # 本地预览构建结果
npm run lint     # 代码检查
```

## 部署说明

推送 `frontend/` 源码至 `main` 分支后，GitHub Actions 会自动构建并发布至 [https://taiji009.github.io/](https://taiji009.github.io/)。

**首次启用需配置一次：** 仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**（不再使用 Deploy from a branch）。

本地构建产物仍输出到 `docs/` 目录，可用于 `npm run preview` 预览；线上发布由 CI 负责，无需手动提交 `docs/`。

## 作者

**张滨** — AIGC 爱好者 · AI 设计师 & 开发者
