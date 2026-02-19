import { test, expect } from '@playwright/test';

test('TC-005-PIM-NEW: Tambah Karyawan Baru', async ({ page }) => {
 
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');

  await page.getByPlaceholder('First Name').fill('Bintang');
  await page.getByPlaceholder('Last Name').fill('Putra');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.locator('.oxd-toast')).toContainText('Successfully Saved');
  await expect(page).toHaveURL(/.*viewPersonalDetails/, { timeout: 10000 });
  await expect(page.getByRole('heading', { name: 'Bintang Putra' })).toBeVisible();
});