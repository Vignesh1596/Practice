const {test , expect} = require ('@playwright/test')

test ('Mouse Hover' , async ({page}) => {

    await page.goto("https://www.amazon.in/")

    const Hello=await page.locator("//div[@id='nav-link-accountList']//a[contains(@class,'nav-progressive-attribute')]");
    const Account=await page.locator("//span[normalize-space()='Your Account']");

    // Mouse Hover

    await Hello.hover();
    await Account.hover();

    await page.waitForTimeout(3000);
})