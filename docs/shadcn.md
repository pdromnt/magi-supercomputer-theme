# MAGI Theme — shadcn/ui

## Setup

1. Set up a shadcn/ui project as usual (`npx shadcn@latest init`).

2. Replace the contents of your `globals.css` (or `app/globals.css`) with `themes/shadcn.css`.

3. Add the font import at the top of your CSS file:

```css
@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
```

4. Make sure your `tailwind.config` or CSS references the font:

```css
@theme {
  --font-sans: 'Share Tech Mono', 'JetBrains Mono', monospace;
  --font-mono: 'Share Tech Mono', 'JetBrains Mono', monospace;
}
```

## What changes

All shadcn/ui components inherit the MAGI palette:

- Buttons: green primary, amber accent, square corners
- Cards/dialogs: dark panels with green text
- Inputs/selects: dark backgrounds with green borders
- Badges: color-matched to MAGI system status colors
- Sidebar: dark panel with green navigation text

## Component styling

Some components benefit from additional styling to match the terminal aesthetic:

```tsx
// Card with terminal header
<Card className="border-magi-border bg-magi-panel">
  <CardHeader className="border-b border-magi-border pb-3">
    <CardTitle className="font-mono text-sm tracking-[3px] uppercase text-magi-accent-alt"
                style={{ textShadow: '0 0 6px currentColor' }}>
      ▸ SYSTEM STATUS
    </CardTitle>
  </CardHeader>
  <CardContent className="pt-4 font-mono text-sm">
    <div className="flex gap-2">
      <span className="text-muted-foreground min-w-[70px]">CPU</span>
      <span className="text-foreground">23%</span>
    </div>
  </CardContent>
</Card>

// Status badge
<Badge variant="outline" className="border-green-500/30 text-green-400 gap-1.5 font-mono">
  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
  ONLINE
</Badge>
```

## Adding CRT effects

Copy `effects/crt.css` into your project and import it:

```css
@import './effects/crt.css';
```

Toggle with a class on `<body>` — see [CRT Effects](#) for details.
