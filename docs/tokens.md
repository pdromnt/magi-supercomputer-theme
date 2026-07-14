# Tokens

Import `themes/variables.css` directly or use the aggregate `magi.css`.

## Public token layers

### Semantic colors

| Role | Token | Default |
|---|---|---|
| Page canvas | `--magi-surface-canvas` | `#050a08` |
| Panel | `--magi-surface-panel` | `#0a1210` |
| Raised control | `--magi-surface-raised` | `#0d1812` |
| Overlay | `--magi-surface-overlay` | `#12231a` |
| Main foreground | `--magi-fg` | `#33ff88` |
| Supporting foreground | `--magi-fg-muted` | `#67b582` |
| Heading foreground | `--magi-fg-heading` | `#f4fff8` |
| Default control border | `--magi-border` | `#356f52` |
| Primary action | `--magi-primary` | `#33ff88` |
| Secondary accent | `--magi-secondary` | `#ff9933` |
| Information | `--magi-info` | `#33aaff` |
| Warning | `--magi-warning` | `#ffaa22` |
| Danger | `--magi-danger` | `#ff3344` |

The muted foreground has substantially more contrast than Amber's original dim green. `--magi-fg-subtle` and `--magi-fg-disabled` are for nonessential or disabled content, not ordinary instructions.

### Typography

- `--magi-font-ui` and `--magi-font-mono`
- `--magi-font-size-00` through `--magi-font-size-5`
- `--magi-line-height-tight`, `--magi-line-height`, `--magi-line-height-relaxed`
- `--magi-tracking-tight`, `--magi-tracking-ui`, `--magi-tracking-label`, `--magi-tracking-display`

Share Tech Mono is the preferred display and UI face. MAGI deliberately does not fetch it from a third party inside the core stylesheet.

### Space and size

`--magi-space-1` through `--magi-space-9` form the spacing scale. Controls use shared height and inline-padding tokens. Panels use `--magi-panel-padding`.

Density is selected once on a theme root:

```html
<main data-magi-theme="amber" data-magi-density="compact">…</main>
```

Supported values are `compact`, the default when omitted, and `comfortable`. Coarse pointers automatically receive at least 40–48px control heights.

### Shape, motion, and layers

MAGI uses near-square geometry. `--magi-radius-1` is the default, while `--magi-radius-round` is reserved for dots, switches, and pill badges. Shared transition, easing, focus, overlay, and z-index tokens keep component behavior consistent.

## Override example

Override semantic roles instead of component selectors:

```css
[data-magi-theme='amber'][data-product='archive'] {
  --magi-secondary: #ffc266;
  --magi-info: #69c2ff;
  --magi-content-width: 96rem;
}
```

## Legacy aliases

V1 names such as `--magi-bg`, `--magi-panel`, `--magi-text`, `--magi-text-dim`, and `--magi-accent-alt` remain mapped to v2 semantic roles. New code should use the v2 names.
