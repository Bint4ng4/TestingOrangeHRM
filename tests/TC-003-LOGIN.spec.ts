import { test, expect } from '@playwright/test';

test.use({ storageState: { cookies: [], origins: [] } });

test('TC-003-LOGIN: Login Gagal dengan Form Kosong', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('button', { name: 'Login' }).click();

  const requiredMsg = page.locator('.oxd-input-group__message');
  await expect(requiredMsg.first()).toHaveText('Required');
});