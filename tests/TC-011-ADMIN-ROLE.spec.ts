import { test, expect } from '@playwright/test';

test('TC-011-ADMIN-ROLE: Validasi Duplikasi Username Admin', async ({ page }) => {
  await page.goto('/web/index.php/admin/saveSystemUser');

  await page.locator('.oxd-select-text').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();
  await page.getByPlaceholder('Type for hints...').fill('Bintang Putra');
  await page.getByRole('option').first().click(); 
  await page.locator('input.oxd-input').nth(1).fill('Admin');
  await page.locator('input.oxd-input').nth(1).press('Tab');

  const errorMessage = page.locator('.oxd-input-group__message');
  await expect(errorMessage).toContainText('Already exists'); 
});