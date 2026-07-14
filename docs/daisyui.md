# daisyUI v5

MAGI uses daisyUI v5's CSS theme plugin syntax.

Start the stylesheet with Tailwind and daisyUI, then copy the `@plugin "daisyui/theme"` block from `themes/daisyui.css` directly below them:

```css
@import "tailwindcss";
@plugin "daisyui";

@plugin "daisyui/theme" {
  /* Copy the complete MAGI block from themes/daisyui.css. */
}
```

Select the theme on a root element:

```html
<html data-theme="magi">
```

The adapter maps base surfaces, content, primary, secondary, accent, neutral, info, success, warning, error, shape, border, depth, and noise variables. It intentionally keeps depth and generated noise at zero so MAGI's hairline terminal structure remains intact.

`themes/daisyui.json` is retained only for projects still on daisyUI v4. New projects should use `themes/daisyui.css`.

Use daisyUI component classes normally. When exact visual parity with the framework-agnostic implementation matters, use MAGI's canonical `.magi-*` classes instead.
