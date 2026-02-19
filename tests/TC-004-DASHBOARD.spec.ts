import { test, expect } from '@playwright/test';

test('TC-004-DASHBOARD: Verifikasi Halaman Dashboard Utama', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await expect(page).toHaveURL(/.*dashboard/);
  
  const dashboardHeader = page.getByRole('heading', { name: 'Dashboard' });
  await expect(dashboardHeader).toBeVisible();

  await expect(page.getByText('Time at Work')).toBeVisible();
});