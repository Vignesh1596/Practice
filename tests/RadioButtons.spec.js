const { test, expect } = require('@playwright/test')

test('Handle Radio Buttons', async ({ page }) => {


    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // radio button

    await page.locator('//input[@value="radio1"]').check(); //radio1 is checked
    //await page.check('//input[@value="radio1"]');

    await expect(await page.locator('//input[@value="radio1"]')).toBeChecked();
    await expect(await page.locator('//input[@value="radio1"]').isChecked()).toBeTruthy(); //radio 1


    await expect(await page.locator('//input[@value="radio2"]').isChecked()).toBeFalsy();// radio 2

    await page.waitForTimeout(5000);

});