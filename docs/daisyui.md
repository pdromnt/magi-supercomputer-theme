# MAGI Theme — DaisyUI

## Setup

1. Install DaisyUI (v4+):

```bash
npm install daisyui@latest
```

2. Add the theme to your `tailwind.config.js`:

```js
const magiTheme = require('./themes/daisyui.json')

module.exports = {
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        magi: magiTheme.magi
      }
    ]
  }
}
```

3. Add `data-theme="magi"` to your `<html>` tag:

```html
<html data-theme="magi">
```

4. Load the font:

```html
<link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">
```

## What changes

DaisyUI components pick up the MAGI palette automatically:

- `btn`, `btn-primary` → green-on-black, square corners, monospace font
- `card` → dark panel background with green text
- `badge`, `alert` → MAGI color scheme
- `input`, `select`, `textarea` → dark inputs with green borders
- `tabs`, `navbar` → zero-radius monospace tabs

## Component Examples

```html
<!-- Primary button -->
<button class="btn btn-primary">EXECUTE</button>

<!-- Card -->
<div class="card bg-base-200 border border-base-300">
  <div class="card-body">
    <h2 class="card-title text-secondary" style="text-shadow: 0 0 6px currentColor">
      SYSTEM STATUS
      <div class="badge badge-success gap-1">
        <span class="w-2 h-2 rounded-full bg-success"></span>
        NOMINAL
      </div>
    </h2>
    <p class="text-base-content/60">All systems operational.</p>
  </div>
</div>

<!-- Alert -->
<div class="alert alert-warning">
  <span>⚠ BACKUP OVERDUE — 3d 14h since last run</span>
</div>

<!-- Tabs -->
<div role="tablist" class="tabs tabs-bordered">
  <a role="tab" class="tab tab-active">MELCHIOR</a>
  <a role="tab" class="tab">BALTHASAR</a>
  <a role="tab" class="tab">CASPER</a>
</div>
```

## Custom properties

The theme also exposes glow shadows you can use:

```css
.my-element {
  box-shadow: var(--glow-primary);
  /* or */
  text-shadow: var(--glow-secondary);
}
```
