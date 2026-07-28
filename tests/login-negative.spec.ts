import { test, expect } from '@playwright/test';

test('should show error with invalid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.getByPlaceholder('Username').fill('wrong_user');
  await page.getByPlaceholder('Password').fill('wrong_pass');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('[data-test="error"]')).toContainText(
    'Username and password do not match'
  );
});