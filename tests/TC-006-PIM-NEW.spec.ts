import { test, expect } from '@playwright/test';

test('TC-008-PIM-NEW: Tambah Karyawan Tanpa Nama Belakang', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');

  await page.getByPlaceholder('First Name').fill('Bintang');
  await page.getByRole('button', { name: 'Save' }).click();
  const errorMessage = page.locator('.oxd-input-group__message');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Required');
  await expect(page).toHaveURL(/.*addEmployee/);
});