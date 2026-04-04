# 💗 Dark Mode Design System: 「暗夜芭比粉」(Dark Night Barbie Pink)

## 1. 核心设计理念 (Core Concept)

在既有 **「The Joyful Architect」** 的波普拼贴感之上，夜间模式不再走「午夜蓝图」的冷灰蓝基底，而是转向 **「暗夜芭比粉」**：基底是**带酒红 / 玫紫倾向的深暗色**（像丝绒舞台幕布），主叙事色让给 **高饱和芭比粉、荧光玫红与泡泡糖粉**，辅以少量**香槟金 / 亮黄**做「首饰高光」。整体要 **亮、敢、略夸张**，但仍保证正文可读与 WCAG 对比度底线。

**关键词：** 暗夜丝绒底、霓虹芭比粉、Y2K 贴纸感、塑料/糖纸高光、硬边描边不消失。

---

## 2. 色彩映射策略 (Color Mapping Strategy)

夜间模式下：**背景压暗且偏暖紫红**，**主文字与粗边框**用**偏暖的米白 / 淡粉白**（而非冷冰冰的灰白），避免和粉色强调色打架。品牌色在暗底上 **Secondary（粉系）升格为主视觉锤**，原 Primary（紫）可收为 **深洋紫 / 电光紫** 做辅助，形成「粉主紫辅」的芭比重奏。

### 🎨 基础表面色 (Surfaces & Backgrounds)

*逻辑：从「暖白纸张」变成「深夜秀场丝绒 + 镭射暗纹」。*

| Token | 浅色模式（参考） | 暗夜芭比粉（建议值） | 说明 |
|--------|------------------|----------------------|------|
| **Background / Surface** | `#f4f6ff` | **`#141018`** ～ **`#1a0f18`** | 近黑，带极弱玫紫 / 酒红，忌纯 `#000` |
| **On-Surface（正文 / 粗边框）** | `#242f41` | **`#fff5f9`** ～ **`#ffe8f2`** | 暖粉白，描边仍可清晰压在深底上 |
| **Surface Container Low** | `#ecf1ff` | **`#221826`** | 比底略抬起一层 |
| **Surface Container** | `#dee8ff` | **`#2d1524`** ～ **`#351a2e`** | 卡片层，可略带「匣子里的芭比展台」感 |
| **Surface Container High** | `#d5e3ff` | **`#402036`** | 更高一层，用于徽章/条带底 |

### 🚀 品牌强调色 (Brand Accents)

*逻辑：**粉系主导**，紫为和弦，金/黄作点缀闪光。*

- **Primary（暗色下建议：电光紫 / 洋紫，托住粉色）**  
  - 浅色：`#6a37d4`  
  - **深色建议：`#c77dff` ～ `#d946ef`**（亮紫粉，和主粉区分又不抢戏）

- **Secondary（芭比粉核心）**  
  - 浅色：`#a02d70`  
  - **深色建议：`#ff4dae` ～ `#ff1694` 区间取 1～2 档**（主 CTA、导航激活、高频强调）  
  - 浅粉填充容器：**`#ff8ec7` / `#ffb3d9`**（用于 chip、标签底，注意与 on 色对比）

- **Tertiary（香槟金 / 亮黄）**  
  - 浅色：`#fcc025` / `#755600`  
  - **深色建议：`#ffe066` 或保持 `#fcc025` 略提亮** — 「首饰高光」，少用但醒目

- **On-Secondary / On-Primary（暗色下按钮内文字）**  
  - 大色块上优先 **深酒红 / 近黑粉 `＃2a0a18`** 或 **纯白**，按具体色块测光选用，保证 AA 以上。

### 🧱 阴影与纹理 (Shadows & Textures)

- **Hard Shadow（硬阴影）**  
  - 浅色：`4px 4px 0 #242411`（或现有 slate）  
  - **深色建议：`4px 4px 0 #000000` 或 `4px 4px 0 #3d0a28`**（纯黑压层次，或极深玫红黑增加主题一致感）

- **Polka-Dot（波点）**  
  - 浅色：深色点 on 浅底  
  - **深色：`radial-gradient(rgba(255, 142, 199, 0.12~0.2) 1px, transparent 1px)`** — 低存在感「糖粉微粒」，避免抢正文

- **可选氛围（文档级建议，实现时按需）**  
  - 极弱 **径向粉色晕影**（hero 角落实 `rgba(255, 20, 148, 0.06)`）增强「霓虹夜店」但不糊字。

---

## 3. CSS 变量架构规划 (Implementation Plan)

仍建议在 `src/index.css` 中用 **`:root`** 与 **`.dark`**（或 `html.dark`）切换语义变量；Tailwind `@theme` 引用 `var(--color-*)`，与现有工程一致。

```css
/* 浅色：保持现有站点令牌，此略 */

/* 暗夜芭比粉 — .dark 覆写示例（可按实装微调） */
.dark {
  --color-background: #141018;
  --color-surface: #141018;
  --color-on-surface: #fff5f9;
  --color-on-background: #fff5f9;

  --color-surface-container-lowest: #141018;
  --color-surface-container-low: #221826;
  --color-surface-container: #2d1524;
  --color-surface-container-high: #402036;

  /* 粉主：导航激活、主要按钮、高亮链接可绑 primary 或 secondary，团队需统一一处 */
  --color-primary: #ff4dae;
  --color-secondary: #ff8ec7;
  --color-tertiary: #ffe066;

  --shadow-color: #000000;
  --polka-dot-color: rgba(255, 142, 199, 0.15);
}
```

> **实装注意：** 若全站把 `primary` 改为粉红，需复查所有 `bg-primary` / `text-on-primary` 组合；必要时为暗色单独增加 `--color-on-primary`（深字）以免粉红底上白字发飘。

---

## 4. 交互与组件适配 (Component Adaptations)

1. **主题切换器**  
   图标可从「月亮」扩展为 **月亮 + 小星星** 或 **粉霓虹圆点**，与「芭比夜间」叙事一致；逻辑仍为 `html` 上切换 `dark` + `localStorage`。

2. **导航激活态**  
   规划为 **芭比粉描边 + 粉字** 或 **粉实线下划线**，避免与浅色模式「黄强调」混用 unless 刻意双模式区分。

3. **玻璃顶栏**  
   `bg-background/80` + `backdrop-blur`；暗色下背景已为深丝绒，磨砂层可略提高透明度让粉晕若隐若现。

4. **头像与照片**  
   可极轻 **`saturate-110` `contrast-105`**，增强「杂志片」感；忌过亮过曝。

5. **Material / 粗描边卡片**  
   保持 **2px `border-on-surface`**（暖粉白），硬阴影色用 `--shadow-color`，贴纸感不断档。

---

## 5. 下一步行动建议 (Next Steps)

1. **定稿色值**：在上表建议区间内，在 Figma 或浏览器里拍一版主屏 + 一页长文，确认粉色不疲劳、正文不费眼。  
2. **同步 `index.css`**：将当前 `.dark` 从「午夜蓝图」令牌迁移为本文 **§3** 的芭比粉令牌，并跑一遍主要区块。  
3. **组件审计**：逐个检查 `primary-container`、`secondary`、`tertiary-container` 在暗色下的 **on-*** 对比度。  
4. **（可选）** 在 `DESIGN.md` 或组件 Story 里追加一句 **Dark = Barbie Night**，方便后续协作统一口径。

---

*文档版本：暗夜芭比粉主题规划（替换原「Midnight Blueprint」方向）。*
