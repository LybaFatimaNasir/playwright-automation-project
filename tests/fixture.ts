import { test as base, expect } from '@playwright/test';

// Extend Playwright's base test with our own custom fixture
export const test = base.extend<{ authenticatedPage: void }>({
  
  // This fixture runs BEFORE every test that uses it
  authenticatedPage: [async ({ page }, use) => {
    // --- SETUP (runs before the test) ---
    await page.goto('https://www.saucedemo.com');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // --- Hand control to the actual test ---
    await use();

    // --- TEARDOWN (runs after the test, even if it fails) ---
    // Nothing needed here for now, but this is where you'd add cleanup
  }, { auto: true }],

});

export { expect };