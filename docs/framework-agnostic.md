# MAGI Theme — Framework-Agnostic (Raw CSS)

## Setup

1. Copy `themes/variables.css` into your project.

2. Link it:

```html
<link rel="stylesheet" href="themes/variables.css">
```

3. Load the font:

```html
<link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">
```

4. (Optional) Add CRT effects:

```html
<link rel="stylesheet" href="effects/crt.css">
```

## Usage

All colors are CSS custom properties. Use them anywhere:

```css
.my-component {
  background: var(--magi-bg);
  color: var(--magi-text);
  font-family: var(--magi-font);
  border: 1px solid var(--magi-border);
}

.my-component .accent {
  color: var(--magi-accent-alt);
  text-shadow: var(--magi-glow);
}
```

## Complete page example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MAGI SYSTEM</title>
  <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="themes/variables.css">
  <link rel="stylesheet" href="effects/crt.css">
  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      background: var(--magi-bg);
      color: var(--magi-text);
      font-family: var(--magi-font);
      font-size: var(--magi-font-size);
      line-height: var(--magi-line-height);
      min-height: 100vh;
      padding: 20px;
    }

    .panel {
      background: var(--magi-panel);
      border: 1px solid var(--magi-border);
      max-width: 500px;
    }

    .panel-header {
      padding: 10px 16px;
      border-bottom: 1px solid var(--magi-border);
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--magi-text-dim);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .panel-title {
      font-size: 14px;
      letter-spacing: 3px;
      color: var(--magi-accent-alt);
      text-shadow: 0 0 6px currentColor;
    }

    .panel-body {
      padding: 16px;
    }

    .row {
      display: flex;
      gap: 8px;
      padding: 2px 0;
    }

    .key { color: var(--magi-text-dim); min-width: 70px; }
    .val { color: var(--magi-text); }

    .dot {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }

    .dot.green {
      background: var(--magi-accent);
      box-shadow: 0 0 6px var(--magi-accent);
      animation: blink-green 3s infinite;
    }

    @keyframes blink-green {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }
  </style>
</head>
<body>
  <div class="panel">
    <div class="panel-header">
      <span class="dot green"></span>
      <span class="panel-title">MELCHIOR</span>
      <span>SYSTEM ANALYSIS</span>
    </div>
    <div class="panel-body">
      <div class="row">
        <span class="key">HOST</span>
        <span class="val">luxray</span>
      </div>
      <div class="row">
        <span class="key">STATUS</span>
        <span class="val" style="color: var(--magi-accent)">NOMINAL</span>
      </div>
    </div>
  </div>

  <script>
    // CTRL+Shift+C to toggle CRT effects
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        document.body.classList.toggle('crt-off')
      }
    })
  </script>
</body>
</html>
```

## Toggling CRT effects

```js
document.body.classList.add('crt-off')    // disable
document.body.classList.remove('crt-off') // enable
```
