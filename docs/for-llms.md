# LLM implementation contract

Use this document when asking an AI assistant to apply or extend MAGI.

## Required inputs

Read these files before implementation:

1. `themes/variables.css`
2. `themes/base.css`
3. `themes/components.css`
4. the relevant adapter, if any

The interactive `preview/index.html` is the canonical markup reference.

## Hard rules

- Keep all reusable classes under the `magi-` prefix.
- Use semantic tokens; do not paste raw palette hex values into product components.
- Define resting, hover, active, focus-visible, disabled, invalid, and selected states where relevant.
- Preserve visible focus rings.
- Use `--magi-fg-muted` for supporting text. Do not revive the low-contrast v1 dim green for body copy.
- Keep compact controls at shared token heights; allow coarse-pointer overrides.
- Use text with status colors.
- Respect reduced motion.
- Keep CRT effects optional.
- Do not name generic components after Amber's dashboard columns or fictional systems.
- Do not introduce a second icon family.

## Extension pattern

1. Decide whether the need belongs in tokens, an existing component, or product CSS.
2. Prefer a `data-*` variant on an existing component over a near-duplicate class.
3. Add the state to the showcase.
4. Add a Playwright interaction or screenshot when behavior or appearance changes.
5. Run `pnpm lint` and `pnpm test`.

## Common failures

- border colors so dim that inputs disappear;
- pill shapes on arbitrary controls;
- green text on green fills;
- icon-only destructive actions without labels;
- every container becoming a card;
- hard-coded 4px scrollbars;
- hover-only disclosure with no keyboard equivalent;
- global CSS resets leaking outside the theme root;
- using animation as the only status signal.
