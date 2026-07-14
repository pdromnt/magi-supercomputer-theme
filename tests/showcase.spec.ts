import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('magi-preview-density', 'compact')
    localStorage.setItem('magi-preview-effects', 'flat')
  })
  await page.goto('/preview/')
  await page.evaluate(() => document.fonts.ready)
})

test('loads the complete component showcase', async ({ page }) => {
  await expect(page.getByText('MAGI Design System', { exact: true }).first()).toBeVisible()
  await expect(page.locator('.showcase-section')).toHaveCount(9)
  await expect(page.getByRole('button', { name: 'Execute' })).toBeVisible()
  await expect(page.getByLabel('Display name')).toHaveValue('MELCHIOR')
})

test('supports density, tabs, dialogs, and toasts', async ({ page }) => {
  await page.getByLabel('Preview density').selectOption('comfortable')
  await expect(page.locator('html')).toHaveAttribute('data-magi-density', 'comfortable')

  await page.getByRole('tab', { name: 'Members' }).click()
  await expect(page.getByRole('tabpanel', { name: 'Members' })).toBeVisible()
  await expect(page.getByRole('tab', { name: 'Members' })).toHaveAttribute('aria-selected', 'true')

  await page.getByRole('button', { name: 'Revoke session' }).first().click()
  await expect(page.getByRole('dialog', { name: 'Revoke this session?' })).toBeVisible()
  await page.getByRole('dialog').getByRole('button', { name: 'Cancel' }).click()
  await expect(page.getByRole('dialog')).not.toBeVisible()

  await page.getByRole('button', { name: 'Trigger toast' }).click()
  await expect(page.getByText('Vault synchronized')).toBeVisible()
  await page.getByRole('button', { name: 'Dismiss notification' }).click()
  await expect(page.getByText('Vault synchronized')).not.toBeVisible()
})

test('implements keyboard tab navigation', async ({ page }) => {
  const overview = page.getByRole('tab', { name: 'Overview' })
  await overview.focus()
  await page.keyboard.press('ArrowRight')
  await expect(page.getByRole('tab', { name: 'Members' })).toBeFocused()
  await expect(page.getByRole('tabpanel', { name: 'Members' })).toBeVisible()
})

test('@a11y has no serious axe violations', async ({ page }) => {
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze()

  expect(results.violations.filter((violation) => ['critical', 'serious'].includes(violation.impact ?? ''))).toEqual([])
})

test('@visual desktop component reference', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium', 'Desktop reference belongs to the desktop project')
  await expect(page.locator('#buttons')).toHaveScreenshot('buttons-desktop.png', { animations: 'disabled' })
  await expect(page.locator('#forms')).toHaveScreenshot('forms-desktop.png', { animations: 'disabled' })
  await expect(page.locator('#feedback')).toHaveScreenshot('feedback-desktop.png', { animations: 'disabled' })
})

test('@visual mobile component reference', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile-chromium', 'Mobile reference belongs to the mobile project')
  await page.locator('#forms').scrollIntoViewIfNeeded()
  await expect(page.locator('#forms')).toHaveScreenshot('forms-mobile.png', { animations: 'disabled' })
})
