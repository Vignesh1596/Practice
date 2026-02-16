// const {test , expect} = require ('@playwright/test')
// const { LoginPage } = require('../pages/LoginPage');
// const { HomePage } = require('../pages/HomePage');
// const { CartPage } = require('../pages/CartPage');

// // test ('POM' , async ({page}) => {

// //      // Login page

// //     const login = new LoginPage(page);
// //     await login.gotoLoginButton();
// //     await login.login('pavanol' , 'test@123');
// //     await page.waitForTimeout(3000);

// //     // Home Page

// //     const home = new HomePage(page);
// //     await home.addProductToCart('Sony vaio i5');
// //     await page.waitForTimeout(3000);
// //     await home.gotoCart();

// //     // Cart Page

// //     const cart = new CartPage(page);
// //     await page.waitForTimeout(3000);
// //     const progress=await cart.checkProductInCart('Sony vaio i5');
// //     await expect(progress).toBe(true);

// // });

// // test('Login with invalid credentials', async ({ page }) => {
// //   const login = new LoginPage(page);
// //   await login.goto();
// //   await login.login('invalid@example.com', 'wrongpass');

// //   const error = await page.locator('.alert-danger').textContent();
// //   expect(error).toContain('Authentication failed');
// // });

// // test('Add product to cart from homepage', async ({ page }) => {
// //   const home = new HomePage(page);
// //   await home.selectProductAndAddToCart();
// //   await home.proceedToCheckout();

// //   await expect(page).toHaveURL(/controller=order/);
// // });

// // test('Validate product is present in cart', async ({ page }) => {
// //   const home = new HomePage(page);
// //   const cart = new CartPage(page);

// //   await home.selectProductAndAddToCart();
// //   await home.proceedToCheckout();

// //   const productName = await cart.validateProductInCart();
// //   expect(productName.length).toBeGreaterThan(0);
// // });



// // test('Login with invalid credentials', async ({ page }) => {
// //   const loginPage = new LoginPage(page);
// //   await loginPage.goto();
// //   await loginPage.login('fakeuser@example.com', 'wrongpass');

// //   const error = await page.locator('.validation-summary-errors').textContent();
// //   expect(error).toContain('Login was unsuccessful');
// // });

// // test('Add product to cart from homepage', async ({ page }) => {
// //   const homePage = new HomePage(page);
// //   await homePage.addProductToCart();
// //   await homePage.goToCart();
// //   await expect(page).toHaveURL(/\/cart/);
// // });

// // test('Validate product is present in cart', async ({ page }) => {
// //   const homePage = new HomePage(page);
// //   const cartPage = new CartPage(page);

// //   await homePage.addProductToCart();
// //   await homePage.goToCart();
// //   await cartPage.validateProductInCart();
// // });

// test('Full flow: login fail, add product, validate cart', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   const homePage = new HomePage(page);
//   const cartPage = new CartPage(page);

//   // Step 1: Open site and attempt login
//   await loginPage.goto();
//   await loginPage.login('fakeuser@example.com', 'wrongpass');
//   const error = await page.locator('.validation-summary-errors').textContent();
//   expect(error).toContain('Login was unsuccessful');

//   // Step 2: Add a product to cart
//   await page.goto('https://demowebshop.tricentis.com/'); // return to homepage
//   await homePage.addProductToCart();

//   // Step 3: Navigate to cart and validate
//   await homePage.goToCart();
//   await cartPage.validateProductInCart();
// });


const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');



test('Pom', async ({ page }) => {

    // Login Page
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await page.waitForTimeout(2000);
    await loginPage.login('standard_user', 'secret_sauce');
    await page.waitForTimeout(3000);

    // Product Page
    const productsPage = new ProductsPage(page);
    await page.waitForTimeout(2000);
    await productsPage.addProductToCart();
    await page.waitForTimeout(2000);

    // Cart Page
    const cartPage = new CartPage(page);
    await page.waitForTimeout(2000);
    await productsPage.goToCart();
    await page.waitForTimeout(2000);
    await cartPage.verifyProductInCart();
});
