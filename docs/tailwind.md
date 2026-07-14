# Tailwind CSS v4

Import Tailwind and then the MAGI theme variables:

```css
@import "tailwindcss";
@import "./vendor/magi/themes/tailwind.css";
```

The adapter exposes utilities including:

- `bg-magi-canvas`, `bg-magi-panel`, `bg-magi-raised`
- `text-magi-fg`, `text-magi-muted`, `text-magi-secondary`
- `border-magi-border`, `border-magi-border-strong`
- `text-magi-success`, `text-magi-warning`, `text-magi-danger`
- `font-magi`, `rounded-magi`, `shadow-magi-glow`

```html
<section class="bg-magi-panel border border-magi-border text-magi-fg font-magi">
  <header class="border-b border-magi-border-subtle px-4 py-2 text-magi-secondary uppercase tracking-[0.12em]">
    System status
  </header>
  <div class="p-4 text-magi-muted">All services are available.</div>
</section>
```

The Tailwind adapter supplies tokens, not duplicate component recipes. Import `magi.css` if you want the canonical `.magi-*` components alongside utilities.
