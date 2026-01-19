const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');

test.describe('Login Tests', () => {

  test('Valid Login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('testuser@example.com', 'Password123!');
    await expect(page).toHaveURL(/.*contacts/);
  });

  test('Unauthorized access should redirect to login', async ({ page }) => {
    await page.goto('/contacts');
    await expect(page).toHaveURL(/.*login/);
  });

});
