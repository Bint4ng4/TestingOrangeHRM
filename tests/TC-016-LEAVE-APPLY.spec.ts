import { test, expect } from '@playwright/test';

test('TC-016-LEAVE-APPLY : Validasi Tanggal Selesai Sebelum Tanggal Mulai', async ({ page }) => {
  await page.goto('/web/index.php/leave/applyLeave');

  
  await page.locator('.oxd-form-loader').waitFor({ state: 'hidden' });

  const leaveTypeDropdown = page.locator('.oxd-select-text').first();
  await expect(leaveTypeDropdown).toBeVisible();
  await leaveTypeDropdown.click();
  await page.getByRole('option', { name: /CAN - Bereavement/i }).click();

  const fromDate = page.locator('div').filter({ hasText: /^From Date$/ }).locator('input');
  const toDate = page.locator('div').filter({ hasText: /^To Date$/ }).locator('input');
  await fromDate.fill('2026-02-20');
  await toDate.fill('2026-02-10'); 
  await toDate.press('Tab'); 
  const errorMsg = page.locator('.oxd-input-group__message');
  await expect(errorMsg).toContainText(/To date should be after from date/i);
});