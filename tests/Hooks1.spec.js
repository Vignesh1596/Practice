const { test, expect } = require('@playwright/test')

test('Home Page Test', async ({ page }) => {

    await page.goto('https://demoblaze.com/index.html');

    // login page

    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator('//button[normalize-space()="Log in"]').click();

    // Home Page

    const products = await page.locator('.card-title');
    await expect(products).toHaveCount(9);

    // Logout Page
    await page.locator('#logout2').click();

});

test('Add Product to cart Test', async ({ page }) => {

    await page.goto('https://demoblaze.com/')

    // Login Page
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator('//button[normalize-space()="Log in"]').click();


    //Add product to cart

    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click();
    await page.locator('//a[normalize-space()="Add to cart"]').click();

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept();
    })

    // Logout Page
    await page.locator('#logout2').click();
});