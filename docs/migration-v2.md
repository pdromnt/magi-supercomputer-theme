# Migrating from v1

V2 keeps the original palette but changes MAGI from a theme sample into a scoped design system.

## Token migration

V1 names remain aliases. Prefer the semantic replacement in new code:

| V1 | V2 |
|---|---|
| `--magi-bg` | `--magi-surface-canvas` |
| `--magi-panel` | `--magi-surface-panel` |
| `--magi-panel-alt` | `--magi-surface-raised` |
| `--magi-text` | `--magi-fg` |
| `--magi-text-dim` | `--magi-fg-muted` |
| `--magi-accent` | `--magi-primary` |
| `--magi-accent-alt` | `--magi-secondary` |

The default muted foreground is intentionally brighter for readability. Decorative dividers still use the original dark green through `--magi-border-subtle`.

## Scope the theme

Add `data-magi-theme="amber"` to the application root. Base styles and components remain scoped beneath it.

## Replace copied snippets

Remove inline component CSS copied from the old `components/` examples. Import `magi.css` and use the canonical `magi-*` classes. This prevents every project from drifting independently.

## Enable effects explicitly

V1 applied CRT effects merely by importing `effects/crt.css`. V2 requires:

```html
<body data-magi-theme="amber" data-magi-effects="crt">
```

Use `data-magi-effects="flat"` to disable them. The old `crt-off` class is still honored when attached to the effects root.

## Framework adapters

The daisyUI adapter moved from the v4 JSON shape to the v5 CSS plugin syntax. `themes/daisyui.json` remains only as a legacy reference. Tailwind and shadcn adapters now include the expanded semantic palette.
