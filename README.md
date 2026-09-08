# MAGI Design System

<img width="1511" height="884" alt="image" src="https://github.com/user-attachments/assets/3ece35f8-df80-4303-b6a0-f0b54c0510d5" />


MAGI is a framework-agnostic design system for dense, terminal-inspired web interfaces. It preserves the luminous green, amber, and blue language established by [Amber](https://github.com/pdromnt/amber), then supplies the boring-but-essential parts a production UI needs: readable secondary text, visible controls, focus states, density modes, responsive behavior, and accessible feedback.

This repository contains CSS—not an application shell. Product-specific terminology, navigation, and fictional chrome belong in the product using MAGI.

## Preview

```bash
pnpm install
pnpm dev
```

Open `http://127.0.0.1:4173/preview/`. The showcase includes foundations, buttons, forms, navigation, feedback, data display, overlays, loading states, density controls, and optional CRT effects.

## Quick start

Use the complete framework-agnostic bundle:

```html
<link rel="stylesheet" href="path/to/magi.css">

<body data-magi-theme="amber" data-magi-density="compact">
  <button class="magi-button" data-variant="primary">Execute</button>
</body>
```

MAGI does not download fonts inside its core CSS. Load Share Tech Mono yourself, self-host it, or accept the documented system-monospace fallbacks:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">
```

### Optional CRT effects

```html
<link rel="stylesheet" href="path/to/effects/crt.css">
<body data-magi-theme="amber" data-magi-effects="crt">
```

Effects are opt-in, never block pointer events, stop animating when the user requests reduced motion, and disappear when printing.

## What is included

| File | Purpose |
|---|---|
| `magi.css` | Tokens, scoped base styles, and every framework-agnostic component |
| `themes/variables.css` | Primitive and semantic design tokens, density modes, v1 aliases |
| `themes/base.css` | Safe scoped reset, focus, selection, links, and normalized scrollbars |
| `themes/components.css` | Layout primitives and production component classes |
| `effects/crt.css` | Optional scanlines, vignette, and restrained flicker |
| `themes/tailwind.css` | Tailwind CSS v4 theme variables |
| `themes/daisyui.css` | daisyUI v5 custom theme |
| `themes/shadcn.css` | Current shadcn/ui CSS variables |
| `preview/` | Interactive reference implementation |

## Component families

- Layout: container, stack, cluster, split, grid, scroll region, constrained pane
- Surfaces: panels, headers, footers, tone variants
- Actions: buttons, icon buttons, adaptive toolbars, segmented controls, disabled and destructive states
- Forms: inputs, selects, textareas, checkbox, radio, switch, validation copy
- Navigation: tabs, responsive pane tabs, sidebar navigation, breadcrumbs
- Feedback: status, badge, alerts, toasts, tooltips
- Data: definition lists, tables, progress, structured logs
- Overlays: native dialog, menu, command surface
- States: empty, spinner, skeleton

See [Component API](docs/components.md) for markup and rules.

## Design rules

1. Use semantic tokens in product code. Raw palette values are implementation details.
2. Reserve neon green for action, selection, and status—not every paragraph.
3. Use text or icons alongside color for status.
4. Keep CRT effects optional. Legibility beats cosplay.
5. Use Phosphor Regular icons at 18–20px by default. Every icon-only action needs an accessible name and tooltip.
6. Prefer square geometry, hairline structure, compact rhythm, and explicit control boundaries.

Read [Design principles](docs/design-principles.md), [Tokens](docs/tokens.md), [Accessibility](docs/accessibility.md), and [Iconography](docs/iconography.md).

## Framework adapters

- [Framework-agnostic CSS](docs/framework-agnostic.md)
- [Tailwind CSS v4](docs/tailwind.md)
- [daisyUI v5](docs/daisyui.md)
- [shadcn/ui](docs/shadcn.md)

Adapters map third-party semantic roles to MAGI. The framework-agnostic classes remain the canonical component implementation.

## Compatibility

The original v1 color names remain aliases in `themes/variables.css`. Component snippets should migrate to the v2 classes because v1 duplicated hard-coded CSS. See [Migrating from v1](docs/migration-v2.md).

MAGI targets current evergreen browsers. Core layout and controls work without `color-mix()` enhancements where applications provide a build-time fallback; the reference package assumes modern browser support.

## Quality

```bash
pnpm lint
pnpm test
pnpm test:a11y
pnpm test:visual
```

Playwright verifies desktop and mobile behavior. Axe checks the showcase for serious accessibility violations. Focused component screenshots provide visual regression coverage. GitHub Actions is manual-only to avoid burning CI unintentionally.

## For AI-assisted implementation

Start with [LLM implementation contract](docs/for-llms.md). It defines the allowed tokens, component naming, state rules, and common failure modes. Do not infer component behavior from color alone.

## License

MIT. See [LICENSE](LICENSE).
