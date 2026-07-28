import { test, expect } from './fixture';

test.describe('SauceDemo Login', () => {

  test('should login successfully with valid credentials', async ({ page }) => {
    // Login already happened via the auto fixture — just assert we're in
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');
  });

});