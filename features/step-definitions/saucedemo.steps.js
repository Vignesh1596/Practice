const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { ProductsPage } = require('../../pages/ProductPage');
const { CartPage } = require('../../pages/CartPage');

let loginPage, productsPage, cartPage;

Given('I launch the application', async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.open();
});

When('I login with username and password ', async function (username, password) {
  await loginPage.login(username, password);
});

When('I add a product to the cart', async function () {
  productsPage = new ProductsPage(this.page);
  await productsPage.addProductToCart();
});

When('I navigate to the cart page', async function () {
  await productsPage.goToCart();
});

Then('I should see the product in the cart', async function () {
  cartPage = new CartPage(this.page);
  await cartPage.verifyProductInCart();
});
