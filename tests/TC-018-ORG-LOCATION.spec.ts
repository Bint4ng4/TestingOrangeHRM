import { test, expect } from '@playwright/test';

test('TC-018-ORG-LOCATION : Bulk Delete User Admin', async ({ page }) => {
  await page.goto('/web/index.php/admin/viewSystemUsers');

  await page.locator('.oxd-table-card .oxd-checkbox-input').nth(1).check();
  await page.locator('.oxd-table-card .oxd-checkbox-input').nth(2).check();

  await page.getByRole('button', { name: /Delete Selected/i }).click();
  await page.getByRole('button', { name: /Yes, Delete/i }).click();
  await expect(page.locator('.oxd-toast')).toContainText('Successfully Deleted');
});