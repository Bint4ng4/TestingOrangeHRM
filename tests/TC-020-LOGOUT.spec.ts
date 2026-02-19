import { test, expect } from '@playwright/test';

test('TC-020-LOGOUT : Logout dari Sistem', async ({ page }) => {
 
  await page.goto('/web/index.php/dashboard/index');

  const userDropdown = page.locator('.oxd-userdropdown-tab');
  await userDropdown.click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await expect(page).toHaveURL(/.*auth\/login/);
  const loginTitle = page.getByRole('heading', { name: 'Login' });
  await expect(loginTitle).toBeVisible();
});