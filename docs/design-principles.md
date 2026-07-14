# Design principles

MAGI is Amber's visual language separated from Amber's application structure.

## 1. Dense, not cramped

Compact interfaces reduce travel and keep related operational data visible. Density cannot remove labels, clip focus rings, or shrink pointer targets below usable sizes. Use `data-magi-density` instead of inventing component-specific padding.

## 2. Hierarchy through signal

MAGI uses four channels deliberately:

- brightness distinguishes primary content from supporting copy;
- hue identifies action, subsystem, and semantic status;
- tracked uppercase text identifies labels and navigation;
- hairline borders define structure.

Avoid adding large shadows, rounded cards, and excessive whitespace to manufacture hierarchy.

## 3. Neon is scarce

The primary green is visually loud. Reserve it for active controls, selected navigation, live status, and high-value data. Long body copy uses the accessible muted green. Headings may use near-white or subsystem colors.

## 4. Interaction is explicit

Inputs have visible resting borders. Buttons have visible boundaries or clear navigation context. Selected states use shape and color. Focus uses a two-layer ring that remains visible against every surface.

## 5. Status is redundant

Never communicate status with color alone. Pair tone with a label, icon, location, or pattern. Animation is optional reinforcement and stops under reduced-motion preferences.

## 6. Effects are seasoning

Scanlines, glow, vignette, and flicker create identity. They must never intercept input, hide content, affect print output, or prevent reduced-motion users from disabling animation.

## 7. Products own their fiction

MAGI provides panels, controls, and feedback. Names such as MELCHIOR, BALTHASAR, CASPER, NERV, or “angel detected” are sample content—not component names or required layout.
