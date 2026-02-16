const {test , expect} = require ('@playwright/test')
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { CartPage } = require('../pages/CartPage');

test ('POM' , async ({page}) => {

     // Login page

    const login = new LoginPage(page);
    await login.gotoLoginButton();
    await login.login('pavanol' , 'test@123');
    await page.waitForTimeout(3000);

    // Home Page

    const home = new HomePage(page);
    await home.addProductToCart('Sony vaio i5');
    await page.waitForTimeout(3000);
    await home.gotoCart();

    // Cart Page

    const cart = new CartPage(page);
    await page.waitForTimeout(3000);
    const progress=await cart.checkProductInCart('Sony vaio i5');
    await expect(progress).toBe(false);

});