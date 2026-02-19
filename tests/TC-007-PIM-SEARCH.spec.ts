import { test, expect } from '@playwright/test';

test('TC-007-PIM-SEARCH: Cari Karyawan Berdasarkan Nama', async ({ page }) => {
  await page.goto('/web/index.php/pim/viewPimModule');
  
  await page.locator('.oxd-table-loader').waitFor({ state: 'hidden' }).catch(() => {});
  const nameInput = page.getByPlaceholder('Type for hints...').first();
  await nameInput.fill('Bintang Putra');
  await page.getByRole('button', { name: 'Search' }).click();
  const table = page.locator('.orangehrm-container');
  await expect(table).toContainText('Bintang Putra', { timeout: 10000 });
  await expect(page.getByText('No Records Found')).not.toBeVisible();
});