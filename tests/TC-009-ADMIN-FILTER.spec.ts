import { test, expect } from '@playwright/test';

test('TC-009-ADMIN-FILTER: Filter Berdasarkan User Role Admin', async ({ page }) => {

  await page.goto('/web/index.php/admin/viewSystemUsers');
  await page.locator('.oxd-select-text').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('.oxd-form-loader').waitFor({ state: 'hidden' });
  const roleCells = page.locator('.oxd-table-card .oxd-table-cell:nth-child(3)');
  const allRoles = await roleCells.all();
  for (const cell of allRoles) {
    await expect(cell).toHaveText('Admin');
  }
  await expect(page.locator('.orangehrm-horizontal-padding > .oxd-text')).toContainText(/Found/); 
  await page.getByRole('button', { name: 'Reset' }).click();
  await expect(page.locator('.oxd-select-text').first()).toContainText('-- Select --');
});