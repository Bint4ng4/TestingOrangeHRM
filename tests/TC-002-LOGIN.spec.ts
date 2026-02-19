import { test, expect } from '@playwright/test';

test.use({ storageState: { cookies: [], origins: [] } });

test('TC-002-LOGIN: Login Gagal dengan Password Salah', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('wrong123');
  await page.getByRole('button', { name: 'Login' }).click();

  const errorAlert = page.locator('.oxd-alert-content-text');
  await expect(errorAlert).toHaveText('Invalid credentials');
});