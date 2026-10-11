# Design System Documentation
## Upstairs Techno — Integrated Claymorphism Design Language

> **Integration Date:** 2026-10-11  
> **Target Project:** `D:\Upstairs Techno\Portfolio\Frontend`  
> **Tech Stack:** Next.js 16 + React 19 + Tailwind CSS v4 + Framer Motion v12 + TypeScript  
> **Philosophy:** Reuses the "Ink + Acid Lime" Claymorphism typography, volumetric 3D surfaces, and signature motion curves while strictly preserving Upstairs Techno's brand identity, drafting blueprint aesthetic, and color palette.

---

## 1. Brand Identity & Color Tokens (Preserved)

| Token | Value | Role |
|---|---|---|
| `--paper` | `#F2F4F1` | Cool off-white drafting paper (Primary background) |
| `--paper-dim` | `#E7EAE5` | Soft paper tint for hover/contrasting sections |
| `--ink` | `#0E1524` | Deep navy-black (Headings, primary text, dark cards) |
| `--ink-soft` | `#161F33` | Drafting-table dark surface |
| `--blueline` | `#2557FF` | Electric blueprint blue (Signature accent & primary CTA) |
| `--blueline-soft` | `#5C7DFF` | Electric blue hover & highlight |
| `--brass` | `#C98A3E` | Brass hardware amber (Secondary accent) |
| `--slate` | `#5B6B76` | Architectural slate (Body text & descriptions) |
| `--grid` | `#C7D0D6` | Hairline blueprint rule / card border |

---

## 2. Typography Scale (Extracted & Integrated)

* **Headings:** `Nunito` (`--font-heading`) — weights: 600, 700, 800, 900.
* **Body / UI:** `DM Sans` (`--font-body`) — weights: 400, 500, 600, 700.
* **Micro-labels / Code:** `JetBrains Mono` / monospace.

| Level | Size | Weight | Line Height | Tracking |
|---|---|---|---|---|
| Hero H1 | `clamp(2.875rem, 5vw + 1.25rem, 5.75rem)` | 800/900 | 1.02 | `-0.025em` |
| Section H2 | `clamp(2.25rem, 3.5vw + 1rem, 3.75rem)` | 800 | 1.10 | `-0.02em` |
| Card H3 | `1.5rem – 1.75rem` (24–28px) | 700 | 1.25 | `-0.015em` |
| Subheading | `1.125rem – 1.25rem` (18–20px) | 600 | 1.35 | `-0.01em` |
| Body | `1rem – 1.125rem` (16–18px) | 400/500 | 1.65 | Normal |
| Micro-Label / Pill | `0.75rem – 0.875rem` (12–14px) | 700 | 1.0 | `+0.04em` |

---

## 3. Claymorphism Surface Treatments

Volumetric 3D styling uses three-point lighting: soft ambient drop shadow, top inset highlight, and bottom inset shade.

### Surface Classes
* `.clay-card`: Crisp white puffy card surface with 20px radius and blueprint hairline border.
* `.clay-card-dark`: Dark navy-blue volumetric card with soft glass highlights.
* `.clay-card-hover`: Lift interaction (`translateY(-4px)`) with expanded shadow depth.
* `.clay-btn-primary`: Electric blueprint button with pill radius and tactile press feedback.
* `.clay-btn-brass`: Warm brass hardware secondary button.
* `.clay-btn-ghost`: Paper-white button with tactile border and elevation.
* `.clay-pill`: Puffy badge tag with inset highlight.
* `.clay-input`: Inset volumetric form input with smooth focus ring.

---

## 4. Animation & Motion Design

* **Signature Easing Curve:** `cubic-bezier(0.22, 1, 0.36, 1)` (soft clay settle)
* **`<Reveal>`:** Fade + rise viewport entrance with `-60px` margin.
* **`<Stagger>` & `<StaggerItem>`:** Coordinated list entrance with 80ms stagger interval.
* **Keyframes:**
  - `pulse-soft`: Electric blue expanding glow ring.
  - `pulse-brass`: Brass expanding glow ring.
  - `float-subtle`: 3.2s looping floating badge effect.
  - `caret-blink`: 1.1s terminal caret animation.
* **Accessibility:** Full `prefers-reduced-motion` kill switch disables all motion for vestibular safety.
