# MAGI Supercomputer Theme

A dark, CRT-inspired theme for web dashboards and terminal-style UIs. Based on the NERV MAGI supercomputer aesthetic from Neon Genesis Evangelion — green-on-black, monospace, scanlines.

**Preview:** Open `preview/index.html` in a browser.

## Color palette

| Token | Hex | Role |
|---|---|---|
| `--magi-bg` | `#050a08` | Page background |
| `--magi-panel` | `#0a1210` | Cards, panels |
| `--magi-text` | `#33ff88` | Body text |
| `--magi-text-dim` | `#1a7a40` | Secondary text |
| `--magi-accent` | `#33ff88` | Primary accent (green) |
| `--magi-accent-alt` | `#ff9933` | Secondary accent (amber) |
| `--magi-blue` | `#33aaff` | Tertiary (blue) |
| `--magi-red` | `#ff3344` | Danger / error |
| `--magi-amber` | `#ffaa22` | Warning |
| `--magi-border` | `#1a3328` | Borders, dividers |

## Quick start

Pick your framework:

| Framework | File | Docs |
|---|---|---|
| **Tailwind v4** | `themes/tailwind.css` | [docs/tailwind.md](docs/tailwind.md) |
| **DaisyUI** | `themes/daisyui.json` | [docs/daisyui.md](docs/daisyui.md) |
| **shadcn/ui** | `themes/shadcn.css` | [docs/shadcn.md](docs/shadcn.md) |
| **Raw CSS** | `themes/variables.css` | [docs/framework-agnostic.md](docs/framework-agnostic.md) |

All approaches use the same color values. Pick the one that matches your stack.

## Optional: CRT effects

Drop `effects/crt.css` into your project to add scanlines, vignette, and screen flicker. Toggle with:

```js
document.body.classList.toggle('crt-off')
```

## Components

The `components/` directory has standalone HTML examples:
- `status-dot.html` — Blinking green/amber/red indicators
- `terminal-card.html` — Panel with header + key/value data rows
- `progress-bar.html` — Color-tiered resource bars
- `log-entry.html` — Timestamped event log entries

Each file is self-contained (styles + markup). Copy, paste, tweak.

## Typography

The theme uses **Share Tech Mono** (Google Fonts) with fallbacks to JetBrains Mono and system monospace. Load it once:

```html
<link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">
```

## LLM-friendly

This repo is designed to be readable by AI assistants. Files are small, self-contained, and extensively commented. An LLM with access to this repo can:
- Apply the theme to a project using any supported framework
- Generate new components consistent with the MAGI aesthetic
- Adapt the color palette for custom use cases

## License

MIT — do whatever you want.
