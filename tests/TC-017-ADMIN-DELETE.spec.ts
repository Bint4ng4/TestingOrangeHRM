import { test, expect } from '@playwright/test';

test('TC-017-ADMIN-DELETE : Hapus User Admin', async ({ page }) => {
  await page.goto('/web/index.php/admin/viewSystemUsers');

  const firstTrashIcon = page.locator('.oxd-table-cell-actions .bi-trash').first();
  await expect(firstTrashIcon).toBeVisible({ timeout: 10000 });
  await firstTrashIcon.click();
  await page.getByRole('button', { name: /Yes, Delete/i }).click();
  await expect(page.locator('.oxd-toast')).toContainText('Successfully Deleted');
});