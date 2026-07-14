# Accessibility

MAGI aims to make a dense aesthetic usable rather than merely compliant-looking.

## Contrast

- Primary, secondary, information, warning, danger, and muted text meet normal-text contrast against the default canvas and panel surfaces.
- Subtle and disabled colors are not suitable for ordinary instructions or body copy.
- Resting form borders use a stronger green than decorative panel dividers.

## Keyboard and focus

All interactive elements require a visible `:focus-visible` state. MAGI supplies a two-layer focus ring. Do not remove it unless a component supplies an equally visible replacement.

Use native controls whenever possible. The showcase implements tabs with arrow-key navigation and dialogs with the native `dialog` element.

## Names and descriptions

- Icon-only buttons require `aria-label` and a visible-on-hover/focus tooltip.
- Inputs require a visible label. Placeholder text is an example, not a label.
- Validation messages should be connected with `aria-describedby`; invalid controls use `aria-invalid="true"`.
- Tables need a caption, even if the caption is visually hidden.

## Status and motion

Always pair semantic tone with text. Pulsing dots and glow are decoration. The library disables repeating animations when `prefers-reduced-motion: reduce` is active.

CRT effects are opt-in and never intercept pointer input. They are removed for print output.

## Pointer targets

Compact density uses 32px controls for pointer-precise desktop interfaces. Under coarse-pointer media queries, MAGI increases control heights automatically. Avoid overriding those sizes on touch layouts.

## Product responsibility

The component CSS cannot guarantee accessible application markup. Test every product with keyboard navigation, zoom, high contrast mode, screen readers, automated scans, and real users.
