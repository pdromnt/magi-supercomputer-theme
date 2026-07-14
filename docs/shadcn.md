# shadcn/ui

Copy the variables from `themes/shadcn.css` into the base layer of your global stylesheet after initializing shadcn/ui.

The adapter defines the current core roles plus chart and sidebar variables. It uses a near-square `--radius`, stronger input borders, accessible muted foreground text, and a green focus ring.

Load Share Tech Mono separately, then map Tailwind's font variables if your shadcn setup does not already consume `--font-sans` and `--font-mono`.

```tsx
<Card className="rounded-[var(--radius)] border-border bg-card font-mono">
  <CardHeader className="border-b border-border">
    <CardTitle className="text-sm font-normal uppercase tracking-[0.12em] text-secondary-foreground">
      System status
    </CardTitle>
  </CardHeader>
  <CardContent className="pt-4 text-muted-foreground">
    All services are available.
  </CardContent>
</Card>
```

shadcn components are copied into the consuming project, so their behavior and state coverage remain the product's responsibility. Use MAGI's focus, contrast, icon, and density rules when modifying generated components.
