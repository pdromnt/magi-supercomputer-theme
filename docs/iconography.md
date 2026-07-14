# Iconography

MAGI's reference icon family is [Phosphor Icons](https://phosphoricons.com/) using the Regular weight.

## Defaults

- standard action icon: 18px;
- prominent navigation icon: 20px;
- empty-state illustration icon: 24–32px;
- stroke weight: Regular / approximately 1.5px;
- color: inherit from the component;
- alignment: optical center, not baseline text hacks.

## Rules

1. Use one icon family inside a product.
2. Choose literal, conventional symbols before themed or decorative ones.
3. Keep text on uncommon, destructive, or high-risk actions.
4. Icon-only buttons require an accessible name and tooltip.
5. Do not use emoji as primary UI icons. Their rendering, weight, and color vary by platform.
6. Do not communicate state by swapping color alone; update the label or accessible name too.

## Markup

```html
<button class="magi-icon-button" type="button"
        aria-label="Open inspector" data-magi-tooltip="Open inspector">
  <svg aria-hidden="true" viewBox="0 0 24 24">…</svg>
</button>
```

Decorative icons use `aria-hidden="true"`. Icons conveying unique information need an accessible text equivalent.

MAGI does not bundle Phosphor assets so consumers can choose the correct framework package and tree-shake icons normally.
