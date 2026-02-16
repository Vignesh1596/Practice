const {test , expect}  = require('@playwright/test')

test ('AssertionsTest', async({page}) => {

    await page.goto('https://demo.nopcommerce.com/register');

    // 1) expect(page).toHaveURL           page has url

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    // 2)expect(page).toHaveTitle          page has title

    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    // 3)expect(page).toBeVisible             element is visible

    const logoElement=await page.locator('.header-logo');
    await expect(logoElement).toBeVisible();

// 4) expect(page).toBeEnabled               control is enabled

const  searchBox=await page.locator('#small-searchterms');
await expect(searchBox).toBeEnabled();

//5) expect(page).toBeChecked                radio/checkbox is checked

const radioButton=await page.locator('#gender-male');
await radioButton.click();
await expect(radioButton).toBeChecked();

// checkbox

const newsCheckBox=await page.locator('#Newsletter');
await expect(newsCheckBox).toBeChecked();

//6) expect(locator).toHaveAttribute          element has attribute

const regButton=await page.locator('#register-button');
await expect(regButton).toHaveAttribute('type' , "submit");


// 7) expect(locator).toHaveText()      element has text
await expect(await page.locator('.page-title h1')).toHaveText('Register'); // full text


// 8) expect(locator).toContainText()         elements contain text

await expect(await page.locator('.page-title h1')).toContainText('Reg');  // partial text

// 9) expect(locator).toHaveValue()           input has a value

const emailInput=await page.locator('#Email');
await emailInput.fill('test@demo.com');
await expect(emailInput).toHaveValue('test@demo.com');

// 10) expect(locator).toHaveCount()          list of elements has given length

const options=await page.locator('select[name="customerCurrency"] option');
await expect(options).toHaveCount(2);


})