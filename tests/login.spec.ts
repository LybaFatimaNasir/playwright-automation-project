import {test, expect } from '@playwright/test'

test.describe('SauceDemo Login', () => {
    test('Should login successfully with valid credentials' , async ({page})=>
        {

        await page.goto('https://www.saucedemo.com')
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', {name : 'Login'}).click();

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await expect(page.locator('.title')).toHaveText('Products');
    
    });

    //Negative tests

    test('should show error with invalid credentials', async ({page})=>{
        await page.goto('https://www.saucedemo.com');

        await page.getByPlaceholder('Username').fill('wrong_user');
        await page.getByPlaceholder('Password').fill('wrongpassword');
        await page.getByRole('button', {name : 'Login'}).click();

        await expect(page.locator('[data-test="error"]')).toContainText(
            'Epic sadface: Username and password do not match any user in this service');
    });
});