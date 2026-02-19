import { test, expect } from '@playwright/test';

test('TC-019-UI-RESPONSIVE : Verifikasi UI Responsive (Mobile View)', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 }); 
  await page.goto('/web/index.php/dashboard/index');

  const adminMenu = page.getByRole('link', { name: 'Admin' });
  const menuButton = page.locator('.oxd-main-menu-button');

  await expect(adminMenu).not.toBeInViewport();
  await menuButton.dispatchEvent('click');
  await expect(adminMenu).toBeVisible({ timeout: 10000 });
});