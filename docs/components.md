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

## Type

- `.magi-heading`, `.magi-kicker`, `.magi-section-label`
- `.magi-meta`, `.magi-copy`, `.magi-glow`, `.magi-truncate`

## Panels

Use `.magi-panel` with `__header`, `__title`, `__subtitle`, `__actions`, `__body`, and `__footer`. `data-tone` accepts `primary`, `info`, `warning`, or `danger`. `data-interactive="true"` adds hover treatment but does not make a panel keyboard-interactive by itself.

## Actions

`.magi-button` supports `data-variant="primary|secondary|ghost|danger"` and `data-size="sm|lg"`. `.magi-icon-button` uses the same variants and sizes. Icon-only buttons require `aria-label`; add `data-magi-tooltip` for a matching visual label.

Toolbars use `.magi-toolbar`, `__group`, and `__separator`.

## Forms

Use `.magi-field` with `__label`, `__hint`, and `__error`. Controls are `.magi-input`, `.magi-select`, `.magi-textarea`, `.magi-checkbox`, `.magi-radio`, and `.magi-switch`.

Set `aria-invalid="true"` and connect the message through `aria-describedby`. Group checkboxes and radios with `.magi-fieldset` and `.magi-legend`.

## Navigation

- tabs: `.magi-tabs` and `.magi-tab` with correct ARIA tab markup;
- sidebar/list navigation: `.magi-nav`, `__label`, and `__item` using `aria-current="page"`;
- breadcrumbs: `.magi-breadcrumbs` on an ordered list inside a labelled navigation landmark.

CSS provides appearance. Products must implement tab keyboard behavior and navigation state.

## Feedback

`.magi-status`, `.magi-badge`, and `.magi-alert` accept `data-tone="success|warning|danger|info"`. Status can add `data-pulse="true"`, but the label remains required.

Toasts use `.magi-toast-region` and `.magi-toast`. Insert and remove them through product JavaScript while keeping the region as an appropriate live region.

## Data

- `.magi-data-list` for definition lists;
- `.magi-table-wrap` and `.magi-table` for responsive tables;
- `.magi-progress` with `--magi-progress-value` and optional warning/danger tone;
- `.magi-log` and `__entry`, `__time`, `__action` for event streams.

## Overlays

Use `.magi-dialog` on the native `dialog` element, with `__header`, `__title`, `__body`, and `__footer`. Menu and command surfaces use `.magi-menu` or `.magi-command` and their item classes.

## Loading and empty states

`.magi-empty`, `.magi-spinner`, and `.magi-skeleton` supply presentational states. Provide accessible text such as “Loading notes” outside a spinner. Skeletons must not be the only status announcement.
