import { test, expect } from '@playwright/test';

test('TC-012-ADMIN-PASSWORD: Ubah Password User Admin', async ({ page }) => {
  await page.goto('/web/index.php/admin/viewSystemUsers');

  const searchInput = page.getByPlaceholder('Type for hints...').first();
  await searchInput.pressSequentially('Admin');
  await page.getByRole('option').first().click();
  
  await page.getByRole('button', { name: 'Search' }).click();

  await page.locator('.oxd-table-cell-actions .bi-pencil-fill').first().click();

  await page.locator('span.oxd-checkbox-input').click();
  await page.locator('input[type="password"]').first().fill('NewAdmin123!');
  await page.locator('input[type="password"]').last().fill('NewAdmin123!');

  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.locator('.oxd-toast')).toContainText('Successfully Updated');
});

