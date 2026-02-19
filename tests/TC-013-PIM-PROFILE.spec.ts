import { test, expect } from '@playwright/test';
import path from 'path';

test('TC-013-PIM-PROFILE : Upload Foto Profil Karyawan', async ({ page }) => {
  
  await page.goto('/web/index.php/pim/viewEmployeeList');
  await page.getByPlaceholder('Type for hints...').first().fill('Bintang Putra');
  await page.getByRole('button', { name: 'Search' }).click();
  
  await page.locator('.oxd-table-cell-actions .bi-pencil-fill').first().click();

  await page.locator('.orangehrm-edit-employee-image').click();

  const fileChooserPromise = page.waitForEvent('filechooser');
  await page.locator('.employee-image-action').click(); 
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles('C:/Users/BINTANG PUTRA ROLA/Downloads/foto.png');

  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.locator('.oxd-toast')).toContainText('Successfully Updated');
});