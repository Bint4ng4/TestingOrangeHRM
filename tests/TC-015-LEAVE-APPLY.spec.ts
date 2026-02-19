import { test, expect } from '@playwright/test';

test('TC-015-LEAVE-APPLY : Pengajuan Cuti Berhasil', async ({ page }) => {

 await page.goto('/web/index.php/leave/applyLeave');

 await page.locator('.oxd-form-loader').waitFor({ state: 'hidden' });
 const leaveTypeDropdown = page.locator('.oxd-select-text').first();
 await leaveTypeDropdown.click();
 await page.getByRole('option', { name: 'CAN - Bereavement' }).click();
 const fromDate = page.locator('div').filter({ hasText: /^From Date$/ }).locator('input');
 await fromDate.fill('2026-02-18');
});