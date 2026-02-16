const {test , expect}  = require('@playwright/test')

test ('Soft Assertions', async({page}) => {

    await page.goto('https://demoblaze.com/');

    // hard assertions

    // await expect(page).toHaveTitle('STORE123');
    // await expect(page).toHaveURL('https://demoblaze.com/');
    // await expect(page.locator('.navbar-brand')).toBeVisible();

    // soft assertion

    await expect.soft(page).toHaveTitle('STORE123');
    await expect.soft(page).toHaveURL('https://demoblaze.com/');
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();

})