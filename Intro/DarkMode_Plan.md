# 🌙 Dark Mode Design System: "Midnight Blueprint" (夜间模式规划方案)

## 1. 核心设计理念 (Core Concept)
基于我们现有的 **"The Joyful Architect" (愉悦的建筑师)** 风格，夜间模式将演变为 **"Midnight Blueprint" (午夜蓝图)**。
我们不使用枯燥的纯黑（`#000000`）和纯灰，而是采用**深邃的蓝紫灰**作为基底，让原有的高饱和度强调色（紫、粉、黄）在暗色背景下像霓虹灯或发光亚克力一样跳跃出来，保持原有的“波普/拼贴”趣味性，同时确保夜间阅读的舒适度。

---

## 2. 色彩映射策略 (Color Mapping Strategy)

在夜间模式下，背景色与前景色（文字/边框）将发生反转，而品牌色（Primary/Secondary/Tertiary）需要适当提高**明度（Lightness）**和**饱和度（Saturation）**，以确保在暗色背景上的无障碍对比度（WCAG Accessibility）。

### 🎨 基础表面色 (Surfaces & Backgrounds)
*逻辑：从“暖白纸张”变为“深色图纸”。*
- **Background / Surface (页面底色)**
  - 浅色：`#f4f6ff` (Warm Cream)
  - **深色：`#121826` (Midnight Slate)** - 深邃且带有微弱蓝紫倾向的极暗灰。
- **On-Surface (主文本 / 粗边框)**
  - 浅色：`#242f41` (Slate 800)
  - **深色：`#f4f6ff` (Warm Cream)** - 直接使用浅色模式的底色作为深色模式的文字和边框色，形成完美闭环。
- **Surface Containers (卡片/容器层级)**
  - `surface-container-lowest`: `#121826` (与底色融为一体或作为最底层)
  - `surface-container-low`: `#1a2235` (微微抬起)
  - `surface-container`: `#242f41` (当前浅色模式的文字色，在深色下作为高亮卡片底色非常合适)

### 🚀 品牌强调色 (Brand Accents)
*逻辑：降低暗色环境下的刺眼感，提升发光感（Neon Effect）。*
- **Primary (主色 - 紫)**
  - 浅色：`#6a37d4`
  - **深色：`#a27cff`** (取自现有 CSS 的 `--color-primary-fixed-dim`) - 更明亮、偏粉紫，在暗色上不沉闷。
- **Secondary (次色 - 粉)**
  - 浅色：`#a02d70`
  - **深色：`#ffabd1`** (取自现有 CSS 的 `--color-secondary-fixed-dim`) - 亮粉色，作为点缀极具赛博朋克感。
- **Tertiary (辅色 - 黄)**
  - 浅色：`#755600` / 容器 `#fcc025`
  - **深色：`#fcc025`** (保持不变或微调至 `#ffd54f`) - 黄色本身在暗色上就有极好的表现力。

### 🧱 阴影与质感 (Shadows & Textures)
- **Hard Shadow (硬阴影)**
  - 浅色：`4px 4px 0px 0px #242f41`
  - **深色：`4px 4px 0px 0px #000000`** - 在深色背景上，只有纯黑的硬阴影才能压得住层级，保持“物理卡纸”的厚重感。
- **Polka-Dot (波点纹理)**
  - 浅色：`radial-gradient(#242f41 1px, transparent 1px)`
  - **深色：`radial-gradient(rgba(244,246,255,0.15) 1px, transparent 1px)`** - 使用低透明度的亮色波点。

---

## 3. CSS 变量架构规划 (Implementation Plan)

为了平滑过渡，建议在 `src/index.css` 中利用 Tailwind v4 的 `@theme` 和 CSS 原生 `@media (prefers-color-scheme: dark)` 或 `.dark` 类来重写变量。

```css
/* 基础浅色变量 (保持现有) */
:root {
  --bg-color: #f4f6ff;
  --text-color: #242f41;
  --border-color: #242f41;
  --shadow-color: #242f41;
  
  --brand-primary: #6a37d4;
  --brand-secondary: #a02d70;
  --brand-tertiary: #fcc025;
}

/* 深色模式覆写 */
.dark {
  --bg-color: #121826;
  --text-color: #f4f6ff;
  --border-color: #f4f6ff;
  --shadow-color: #000000;
  
  --brand-primary: #a27cff;
  --brand-secondary: #ffabd1;
  --brand-tertiary: #ffd54f;
}
```

---

## 4. 交互与组件适配 (Component Adaptations)

1. **主题切换器 (Theme Toggle)**
   - 可以在 TopNavBar 添加一个太阳/月亮图标的切换按钮。
   - 切换时给 `<html>` 标签动态添加或移除 `dark` class。
2. **图片与媒体 (Images)**
   - 头像等图片在深色模式下可适当降低一点点亮度（`brightness-90`），避免在暗色屏幕上过于刺眼。
3. **玻璃态 (Glassmorphism)**
   - 顶栏现有的 `bg-[#f4f6ff]/80 dark:bg-[#242f41]/80 backdrop-blur-xl` 逻辑已经很好，深色下可统一调整为 `bg-[var(--bg-color)]/80`。

---

## 5. 下一步行动建议 (Next Steps)
1. **确认色板**：你是否喜欢这种带有“霓虹/赛博”微光的深蓝紫灰方案？
2. **重构 CSS 变量**：将 `App.tsx` 中硬编码的颜色（如 `bg-[#f4f6ff]`）提取到 `index.css` 的语义化变量中。
3. **引入 Dark Mode Toggle**：在 React 中实现状态管理和 `localStorage` 缓存，让用户可以手动切换。
