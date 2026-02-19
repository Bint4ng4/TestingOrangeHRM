import { test, expect } from '@playwright/test';

test('TC-008-PIM-SEARCH: Cari Karyawan Tidak Terdaftar', async ({ page }) => {
  // 1. Masuk ke halaman daftar karyawan (PIM)
  await page.goto('/web/index.php/pim/viewPimModule');
  const nameInput = page.getByPlaceholder('Type for hints...').first();
  await nameInput.fill('Zzzzz');
  await page.getByRole('button', { name: 'Search' }).click();
  const noRecordMsg = page.getByText('No Records Found').first();
  await expect(noRecordMsg).toBeVisible({ timeout: 10000 });
  await expect(page.locator('.oxd-table-card')).toHaveCount(0);
});