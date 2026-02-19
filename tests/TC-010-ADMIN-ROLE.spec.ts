import { test, expect } from '@playwright/test';

test('TC-010-ADMIN-ROLE: Tambah User Admin Baru', async ({ page }) => {
  await page.goto('/web/index.php/admin/viewSystemUsers');
  await page.getByRole('button', { name: ' Add' }).click();

  await page.locator('.oxd-select-text').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();
  await page.getByPlaceholder('Type for hints...').fill('Bintang');
  await page.getByRole('option').first().click();
  await page.locator('.oxd-select-text').last().click();
  await page.getByRole('option', { name: 'Enabled' }).click();
  await page.locator('input.oxd-input').nth(1).fill('bintangstar');
  await page.locator('input[type="password"]').first().fill('Kudanil12');
  await page.locator('input[type="password"]').last().fill('Kudanil12');
  await page.getByRole('button', { name: 'Save' }).click();

  await expect.soft(page.locator('.oxd-toast')).toContainText('Successfully Saved');
  await expect.soft(page).toHaveURL(/.*viewSystemUsers/);
});