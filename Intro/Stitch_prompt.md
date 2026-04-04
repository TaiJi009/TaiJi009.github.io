# Context & Role
You are an expert frontend engineer, UI/UX designer, visual design specialist, and typography expert. Your goal is to generate a high-fidelity, interactive personal portfolio website prototype based on the provided content and strict design system.

# Strict Constraints
1. **NO IMAGES OR AVATARS**: Do not include any `<img>` tags for photos, avatars, or external images. Instead, use CSS-drawn primitive shapes, typographic lockups, SVG patterns (polka dots, grids, squiggles), or Lucide React icons enclosed in geometric shapes.
2. **SINGLE PAGE OR COMPONENT-BASED**: Build a cohesive layout that flows logically from top to bottom.
3. **APPLY THE DESIGN SYSTEM**: Strictly follow the "Playful Geometric Design System" defined below. Use the exact colors, hard shadows, chunky borders, and bouncy hover states specified.

---

# Content to Include (Translate to UI Elements)

**1. Header / Navigation**
- Logo/Name: Zhang Bin (or a stylized "ZB")
- Links: About, Skills, Experience, Contact

**2. Hero Section**
- Greeting: Hi, I'm Zhang Bin
- Roles/Tags: AIGC Enthusiast, AI Designer & Coder, Academic Explorer, Team Glue (ENTJ)
- Visual: Instead of an avatar, create a playful composition of a massive yellow circle (`#FBBF24`), a violet pill shape (`#8B5CF6`), and a floating sticker-like element.
- Call to Action: "Contact Me" (Candy Button style)

**3. About Me**
- Location: Guangzhou, Tianhe District
- Education: Guangdong University of Technology (B.A. in Digital Media Art, GPA 3.94 / Top 10%, 2019-2023)
- Traits: Problem-driven, logical, quick to integrate, reflective.
- Academic: Published paper at Chinese CHI (International Symposium on Chinese CHI).

**4. Toolchain & Skills (Use "Sticker Cards" or colorful tags)**
- AI Tools: Gemini, ChatGPT, DeepSeek, Sora, Doubao
- AI Editors & Dev: Cursor, n8n, VS Code, GitHub, Docker
- AIGC + Graphic: Midjourney, ComfyUI, Figma, PS, Procreate
- AIGC + Video: Sora, Jimeng, Premiere Pro, After Effects

**5. Work Experience (Timeline or Grid of Sticker Cards)**
- **Guangzhou Yiyue Tech (2023.09 - 2026.03)**
  - *Roles*: AI Product Manager Assistant & AI Visual Creator
  - *StoryForge B-End Platform*: Led UI/UX and requirement design for 5 core modules. Integrated LLMs (Claude Opus, GPT-4) for script/storyboard generation. Built digital asset management and AI scoring systems.
  - *AI Visual Creation*: Full-pipeline AIGC creation for 8 film/short-drama projects using Midjourney/ComfyUI/Sora. Reduced concept design time from months to weeks.

**6. Competitions & Campus Practice**
- *National Level*: "Design Sauce" Website (Internet+ Competition) - Team Leader.
- *Provincial Level*: "Guangcai Porcelain" VR - Team Leader.
- *Campus*: College Web Platform Team Leader (Design + Operations), Party Building Office Secretary Minister.

**7. Contact / Footer**
- Phone/WeChat: 13928203916
- Email: zbyingwusuozhu04@126.com
- Visual: A large, friendly footer with a dotted background pattern and a floating "Say Hello" speech bubble (using the Blob radius).

---

# Design System: Playful Geometric

## Design Philosophy
**Playful Geometric** is the antidote to sterile, corporate minimalism. It creates an emotional connection through **optimism, clarity, and tactile fun**. The core concept is **"Stable Grid, Wild Decoration"**.

### Visual Signatures
- **Primitive Shapes**: Circles, triangles, squares, pill shapes, and squiggles used as background elements, masks, or icons.
- **Hard Shadows**: Elements often have a hard, offset drop shadow (no blur) giving a sticker or cut-out paper feel.
- **Pattern Fills**: Polka dots, grid lines, and diagonal stripes used to fill shapes or backgrounds.
- **Varied Radii**: Mixing fully rounded corners with sharp ones to create "leaf" shapes or asymmetric blobs.

## Design Token System

### Colors (Light Mode)
- `background`: `#FFFDF5` (Warm Cream/Off-White)
- `foreground`: `#1E293B` (Slate 800)
- `muted`: `#F1F5F9`
- `mutedForeground`: `#64748B`
- `accent`: `#8B5CF6` (Vivid Violet)
- `accentForeground`: `#FFFFFF`
- `secondary`: `#F472B6` (Hot Pink)
- `tertiary`: `#FBBF24` (Amber/Yellow)
- `quaternary`: `#34D399` (Emerald/Mint)
- `border`: `#E2E8F0` (Slate 200)

*Usage Rule*: Use `accent` for primary actions. Use `secondary`, `tertiary`, and `quaternary` rotationally for decorative shapes, icons, or emphasized words to create a "confetti" effect.

### Typography
- **Headings**: `"Outfit", system-ui, sans-serif` (Weights: 700, 800)
- **Body**: `"Plus Jakarta Sans", system-ui, sans-serif` (Weights: 400, 500)
- **Scale Ratio**: 1.25 (Major Third)

### Radius & Border
- `radius-sm`: 8px, `radius-md`: 16px, `radius-lg`: 24px, `radius-full`: 9999px
- `border-width`: 2px (Chunky borders by default)
- **Blob Radius**: `rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-none` (Speech bubble) or `rounded-t-full rounded-b-none` (Arch).

### Shadows & Effects (The "Pop" Shadow)
- `box-shadow`: `4px 4px 0px 0px #1E293B`
- `box-shadow-hover`: `6px 6px 0px 0px #1E293B`
- `box-shadow-active`: `2px 2px 0px 0px #1E293B`

## Component Stylings

### Buttons
**Primary Button ("The Candy Button")**:
- Bg: `#8B5CF6`, Text: white, Font-weight: 700
- Radius: `rounded-full`
- Border: `2px solid #1E293B`
- Shadow: `4px 4px 0px #1E293B`
- Hover: `translate-x-[-2px] translate-y-[-2px]`, shadow extends to `6px 6px`
- Active: `translate-x-[2px] translate-y-[2px]`, shadow shrinks to `2px 2px`

**Secondary Button**:
- Bg: transparent, Text: `#1E293B`, Border: `2px solid #1E293B`, Radius: `rounded-full`, Shadow: none
- Hover: `bg-[#FBBF24]` (Fills with yellow)

### Cards ("The Sticker Card")
- Bg: white, Border: `2px solid #1E293B`, Radius: `rounded-xl`
- Shadow: `8px 8px 0px #E2E8F0` (or `#F472B6` for featured)
- Hover: Rotate -1deg, Scale 1.02 (Wiggle effect)
- Title: Bold Outfit font

## Layout & Animation Strategy
- **Container**: `max-w-6xl`
- **Spacing**: Generous (`py-24`), filled with patterns.
- **Animation Feel**: Bouncy, Elastic, Fun. Use `transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]`.
- **Entrance**: Pop in (Scale 0->1 with bounce).
- **Icons**: Stroke width 2.5px. Enclosed in shapes (e.g., a white icon inside a colored circle). Never floating alone.

Please generate the code for this prototype, ensuring all content is included and the Playful Geometric design system is perfectly executed.