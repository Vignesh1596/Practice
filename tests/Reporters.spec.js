const {test , expect} = require ("@playwright/test")

test('Test 1' , async ({page}) => {

    await page.goto('https://demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
});

test('Test 2', async ({page}) => {

    await page.goto('https://www.amazon.in/');
    await expect(page).toHaveURL('https://www.amazon.in/');
});

test ('Test 3' , async ({page}) => {

    await page.goto('https://demo.nopcommerce.com/register');
    await expect(page).toHaveTitle('nopCommerce demo store. Register');
})