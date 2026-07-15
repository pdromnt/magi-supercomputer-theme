# Component API

All reusable component classes use the `magi-` prefix. Add `data-magi-theme="amber"` to an ancestor before using them.

## Layout

- `.magi-container`
- `.magi-stack` with optional `--magi-stack-gap`
- `.magi-cluster` with optional `--magi-cluster-gap`
- `.magi-split`
- `.magi-grid` with optional `--magi-grid-gap`
- `.magi-scroll-region`
- `.magi-visually-hidden`
- `.magi-pane` establishes a container-query boundary for constrained application panes;
- `.magi-pane__content` supplies the standard content inset and scrolling behavior.

## Type

- `.magi-heading`, `.magi-kicker`, `.magi-section-label`
- `.magi-meta`, `.magi-copy`, `.magi-glow`, `.magi-truncate`

## Panels

Use `.magi-panel` with `__header`, `__title`, `__subtitle`, `__actions`, `__body`, and `__footer`. `data-tone` accepts `primary`, `info`, `warning`, or `danger`. `data-interactive="true"` adds hover treatment but does not make a panel keyboard-interactive by itself.

## Actions

`.magi-button` supports `data-variant="primary|secondary|ghost|danger"` and `data-size="sm|lg"`. `.magi-icon-button` uses the same variants and sizes. Icon-only buttons require `aria-label`; add `data-magi-tooltip` for a matching visual label.

Toolbars use `.magi-toolbar`, `__group`, and `__separator`. Add `data-align="end"` to a trailing group. Inside `.magi-pane`, `data-responsive="stack"` makes the toolbar stack below 24rem. Buttons that may become icon-only use `data-collapse="icon"` and wrap their visible label in `.magi-toolbar__label`; the label remains available to assistive technology.

Adjacent mode selectors use `.magi-segmented` and `.magi-segmented__item`. Mark the current item with `aria-pressed="true"`, `aria-selected="true"`, or `data-active="true"`. MAGI raises the active item above its siblings so every selected border remains visible.

## Forms

Use `.magi-field` with `__label`, `__hint`, and `__error`. Controls are `.magi-input`, `.magi-select`, `.magi-textarea`, `.magi-checkbox`, `.magi-radio`, and `.magi-switch`.

Use `.magi-input[data-variant="embedded"]` only inside an already-bordered surface such as a flush command palette. It replaces the outer focus halo with a single selected bottom border, avoiding doubled borders while preserving a visible focus state.

Set `aria-invalid="true"` and connect the message through `aria-describedby`. Group checkboxes and radios with `.magi-fieldset` and `.magi-legend`.

## Navigation

- tabs: `.magi-tabs` and `.magi-tab` with correct ARIA tab markup;
- sidebar/list navigation: `.magi-nav`, `__label`, and `__item` using `aria-current="page"`;
- breadcrumbs: `.magi-breadcrumbs` on an ordered list inside a labelled navigation landmark.

CSS provides appearance. Products must implement tab keyboard behavior and navigation state.

Inside `.magi-pane`, tabs with `data-responsive="wrap"` become a three-column grid below 21rem instead of crushing labels or overflowing into siblings.

## Feedback

`.magi-status`, `.magi-badge`, and `.magi-alert` accept `data-tone="success|warning|danger|info"`. Status can add `data-pulse="true"`, but the label remains required.

Toasts use `.magi-toast-region` and `.magi-toast`. Insert and remove them through product JavaScript while keeping the region as an appropriate live region.

## Data

- `.magi-data-list` for definition lists;
- `.magi-table-wrap` and `.magi-table` for responsive tables;
- `.magi-progress` with `--magi-progress-value` and optional warning/danger tone;
- `.magi-log` and `__entry`, `__time`, `__action` for event streams.

## Overlays

Use `.magi-dialog` on the native `dialog` element, with `__header`, `__title`, `__body`, and `__footer`. Menu and command surfaces use `.magi-menu` or `.magi-command` and their item classes. These surfaces own their border, overlay background, inset, and shadow; products should only position them.

Use `.magi-command[data-layout="flush"]` with `.magi-command__items` and an embedded input when the filter should meet the command surface edges without creating a second focus box.

## Constrained pane recipe

```html
<aside class="magi-pane">
  <div class="magi-toolbar" data-responsive="stack">
    <div class="magi-toolbar__group">
      <button class="magi-button" data-collapse="icon" aria-label="New note">
        <svg aria-hidden="true"><!-- Phosphor icon --></svg>
        <span class="magi-toolbar__label">New</span>
      </button>
    </div>
    <div class="magi-toolbar__group" data-align="end">…</div>
  </div>
  <nav class="magi-tabs" data-responsive="wrap" role="tablist">…</nav>
  <div class="magi-pane__content">…</div>
</aside>
```

Container queries respond to the pane itself. Resizing a sidebar therefore cannot make its controls silently disappear merely because the viewport remains wide.

## Loading and empty states

`.magi-empty`, `.magi-spinner`, and `.magi-skeleton` supply presentational states. Provide accessible text such as “Loading notes” outside a spinner. Skeletons must not be the only status announcement.
