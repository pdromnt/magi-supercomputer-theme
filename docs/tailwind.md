# MAGI Theme — Tailwind v4

## Setup

1. Copy `themes/tailwind.css` into your project.

2. Import it in your main CSS file:

```css
@import './themes/tailwind.css';
```

3. Import the font in your HTML `<head>` or CSS:

```html
<link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">
```

4. (Optional) Add CRT effects:

```css
@import './effects/crt.css';
```

## Usage

All colors are available as Tailwind utility classes:

```html
<!-- Backgrounds -->
<div class="bg-magi-bg text-magi-text font-magi">
  <h1 class="text-magi-accent-alt">MAGI SYSTEM</h1>
  <p class="text-magi-text-dim">status: nominal</p>
</div>

<!-- Panel / Card -->
<div class="bg-magi-panel border border-magi-border p-4">
  <div class="text-magi-text-dim text-xs uppercase tracking-wider border-b border-magi-border pb-2 mb-2">
    ▸ SYSTEM STATUS
  </div>
  <div class="flex gap-2 text-sm">
    <span class="text-magi-text-dim">CPU</span>
    <span class="text-magi-text">23%</span>
  </div>
</div>

<!-- Interactive -->
<button class="bg-magi-accent text-magi-bg px-4 py-2 font-magi uppercase tracking-wider
               hover:opacity-90 transition-opacity">
  EXECUTE
</button>

<!-- Status colors -->
<span class="text-magi-accent">● ONLINE</span>
<span class="text-magi-amber">● DEGRADED</span>
<span class="text-magi-red">● OFFLINE</span>
```

## Component Patterns

### Status Dot
```html
<span class="inline-block w-2 h-2 rounded-full bg-magi-accent
             shadow-[0_0_6px_var(--color-magi-accent)]
             animate-pulse"></span>
```

### Progress Bar
```html
<div class="w-full h-2.5 bg-magi-panel-alt border border-magi-border">
  <div class="h-full bg-gradient-to-r from-[#1a6630] to-magi-accent
              shadow-[0_0_8px_rgba(51,255,136,0.3)]"
       style="width: 45%"></div>
</div>
```

### Data Row (key/value)
```html
<div class="flex gap-2 py-0.5 text-sm font-magi">
  <span class="text-magi-text-dim min-w-[70px]">HOST</span>
  <span class="text-magi-text">luxray</span>
</div>
```

### Section Header
```html
<div class="text-magi-text-dim text-[10px] uppercase tracking-[2px]
            border-b border-magi-border pb-1 mb-2 font-magi">
  ▸ SYSTEM ANALYSIS
</div>
```

## CRT Effects Toggle

The CRT effects respond to a `crt-off` class on `<body>`:

```js
// Toggle CRT effects on/off
function toggleCrt() {
  document.body.classList.toggle('crt-off')
  localStorage.setItem('magi-crt', document.body.classList.contains('crt-off') ? 'off' : 'on')
}

// Load saved preference
if (localStorage.getItem('magi-crt') === 'off') {
  document.body.classList.add('crt-off')
}
```
