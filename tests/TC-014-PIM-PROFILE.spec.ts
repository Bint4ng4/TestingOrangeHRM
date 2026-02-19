import { test, expect } from '@playwright/test';
import path from 'path';

test('TC-014-PIM-PROFILE : Upload Foto dengan Format Salah', async ({ page }) => {

  await page.goto('/web/index.php/pim/viewEmployeeList');

  await page.getByPlaceholder('Type for hints...').first().fill('Bintang Putra');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('.oxd-table-cell-actions .bi-pencil-fill').first().click();

  await page.locator('.orangehrm-edit-employee-image').click();


  const fileChooserPromise = page.waitForEvent('filechooser');
  await page.locator('.employee-image-action').click(); 
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles("C:/Users/BINTANG PUTRA ROLA/Downloads/Test_Case_OrangeHRM.xlsx");

  const errorMsg = page.locator('.oxd-input-group__message');
  await expect(errorMsg).toBeVisible();
  await expect(errorMsg).toContainText('File type not allowed');

  await expect(page.getByRole('button', { name: 'Save' })).toBeVisible(); 
});