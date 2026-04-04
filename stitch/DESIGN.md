```markdown
# Design System Specification: Stable Grid, Wild Decoration

## 1. Overview & Creative North Star: "The Joyful Architect"
This design system is built on the tension between structural discipline and whimsical expression. We call this creative north star **"The Joyful Architect."** It rejects the sterile, "safe" layouts of modern SaaS and instead embraces the tactile energy of physical scrapbooking and Memphis-style geometry.

The "Stable Grid" provides the functional foundation—ensuring clarity and readability—while the "Wild Decoration" breaks the fourth wall through overlapping primitive shapes, asymmetric containers, and rhythmic patterns. We move beyond the template look by treating the browser as a physical canvas where elements aren't just displayed; they are *constructed*.

---

## 2. Colors & Surface Logic
While the palette is vibrant, it is governed by a strict hierarchy to maintain premium readability.

### Color Tokens (Material Design Mapping)
- **Primary (Vivid Violet):** `#6a37d4` – Used for core action paths and focal geometry.
- **Secondary (Hot Pink):** `#a02d70` – Used for high-energy accents and "surprise" elements.
- **Tertiary (Amber/Yellow):** `#755600` – Used for warning states and secondary decorative highlights.
- **Surface (Warm Cream):** `#f4f6ff` – The primary "canvas" color.
- **On-Surface (Slate 800):** `#242f41` – Our "ink" color for all borders and primary text.

### The "No-Line" Rule & Tonal Nesting
- **Prohibition of 1px Neutrals:** Under no circumstances should you use a standard 1px light grey border to separate sections.
- **Surface Hierarchy:** Define boundaries through background shifts. A `surface-container-low` section sits on a `surface` background to create a subtle change in "plane."
- **Nesting:** To create depth, use the Tiered Surface approach. An inner card should use `surface-container-lowest` when placed on a `surface-container` background.

### Signature Textures & Glass
- **The Polka-Dot Overlay:** Use a 5% opacity `on-surface` dot pattern on `surface-container` backgrounds to add a tactile, paper-like quality.
- **Vibrant Glassmorphism:** For floating navigation or "wild" decorative shapes, use semi-transparent versions of `primary` or `secondary` with a `backdrop-blur` of 12px. This creates a "frosted acrylic" look that feels expensive and custom.

---

## 3. Typography: Editorial Impact
The pairing of **Outfit** and **Plus Jakarta Sans** is designed to feel both authoritative and approachable.

- **Display & Headlines (Outfit 700/800):** These are your "Architectural" elements. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) to create high-impact, editorial headers that command the page.
- **Body (Plus Jakarta Sans 400/500):** This is your "Clarity" layer. `body-lg` (1rem) is the workhorse. The generous x-height ensures readability even against vibrant decorative backgrounds.
- **Hierarchy as Identity:** Always lead with a massive `display` headline. Use `title-md` (1.125rem) in all-caps with 0.1em tracking for sub-headers to create a "labeling" effect similar to a blueprint.

---

## 4. Elevation & Depth: Hard-Edge Tactility
Unlike traditional systems that mimic soft light, this system mimics physical cutouts and stacked cardstock.

- **The Hard Shadow:** Use a zero-blur offset: `4px 4px 0px 0px #1E293B`. This applies to all interactive cards and primary buttons. It signals "clickability" through physical thickness rather than ethereal glow.
- **Asymmetric Radii:** To break the "Bootstrap" feel, use asymmetric border-radii for large containers (e.g., `border-radius: 24px 8px 24px 8px`). This "Blob" logic makes the grid feel organic.
- **The Layering Principle:** Depth is achieved by "stacking." A `secondary` colored shape can peek out from behind a `surface-container-lowest` card, creating a 3D collage effect.
- **The Ghost Border:** If a container requires further definition, use a 2px border of `outline-variant` at 15% opacity. Never use 100% opaque lines unless they are the chunky 2px `on-surface` functional borders.

---

## 5. Components

### Buttons
- **Primary:** Chunky 2px border, `primary` background, `on-primary` text, and the signature 4px hard shadow.
- **Interaction:** On hover, the button should translate `-2px, -2px` while the shadow grows to `6px 6px`. Use the elastic transition: `cubic-bezier(0.34, 1.56, 0.64, 1)`.

### Cards
- **Construction:** No dividers. Separate content using `surface-container` shifts or vertical white space (32px+).
- **Decoration:** Every card must feature one "Wild" element—a decorative circle in the corner or a geometric "tab" using `tertiary_fixed`.

### Input Fields
- **State:** 2px border `on-surface`. On focus, the border color remains the same, but the hard shadow appears in `accent` violet to signal activity.

### Chips & Tags
- **Style:** Pill-shaped (`full` radius) with a 2px border. Use `quaternary` (Mint) for "Success" or "Completed" tags to maintain the optimistic palette.

---

## 6. Do’s and Don’ts

### Do:
- **Overlap Elements:** Let a decorative circle sit 20% off the edge of a card.
- **Use "Illegal" Combinations:** Pair a `secondary` (Pink) shape next to a `primary` (Violet) button for high-energy contrast.
- **Embrace White Space:** Use the `xl` (3rem) spacing scale between sections to let the "Wild Decoration" breathe.

### Don't:
- **No Soft Shadows:** If it blurs, it’s wrong. We want crisp, hard edges.
- **No Thin Lines:** 1px borders are forbidden. They feel fragile; we want "Stable" and chunky.
- **No Centered-Everything:** While the grid is stable, the content should feel dynamic. Use left-aligned typography with right-aligned decorative shapes to create visual rhythm.

### Accessibility Note
Despite the "Wild" decoration, ensure all text on `primary` or `secondary` backgrounds passes WCAG AA contrast. Use the `on-primary-container` tokens for text overlays to guarantee legibility.