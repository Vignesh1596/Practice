const { test, expect } = require('@playwright/test')

test('handle inputbox', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Inputbox  - firstname

    await expect(await page.locator('//input[@id="name"]')).toBeVisible();
    await expect(await page.locator('//input[@id="name"]')).toBeEmpty();
    await expect(await page.locator('//input[@id="name"]')).toBeEditable();
    await expect(await page.locator('//input[@id="name"]')).toBeEnabled();

    await page.fill('//input[@id="name"]', "Sundar");

    await page.waitForTimeout(5000);  // pausing code
});
