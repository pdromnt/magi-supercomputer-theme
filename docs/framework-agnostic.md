# Framework-agnostic CSS

## Install

Copy the repository files, install the package from Git, or consume the exported CSS through your build system.

```css
@import 'magi-supercomputer-theme';
```

For manual HTML usage:

```html
<link rel="stylesheet" href="/vendor/magi/magi.css">
<main data-magi-theme="amber" data-magi-density="compact">…</main>
```

Base and component styles are scoped beneath `data-magi-theme`. Tokens are global so applications can use them when composing product-specific CSS.

## Minimal panel

```html
<article class="magi-panel" data-tone="info">
  <header class="magi-panel__header">
    <h2 class="magi-panel__title">System status</h2>
    <span class="magi-panel__subtitle">Live data</span>
  </header>
  <div class="magi-panel__body">
    <dl class="magi-data-list">
      <dt>Host</dt><dd>luxray</dd>
      <dt>Status</dt><dd><span class="magi-status" data-tone="success">Nominal</span></dd>
    </dl>
  </div>
</article>
```

## Minimal form

```html
<label class="magi-field">
  <span class="magi-field__label">Vault name</span>
  <input class="magi-input" aria-describedby="vault-hint">
  <span id="vault-hint" class="magi-field__hint">Visible to invited members.</span>
</label>
```

Use [Component API](components.md) for the full class inventory and [Accessibility](accessibility.md) for markup requirements.
