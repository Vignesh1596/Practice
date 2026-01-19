const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { ContactsPage } = require('../../pages/contactsPage');

test.describe('Contacts CRUD', () => {

  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('testuser@example.com', 'Password123!');
    await expect(page).toHaveURL(/.*contacts/);
  });

  test('Add Contact', async ({ page }) => {
    const contacts = new ContactsPage(page);

    const data = {
      name: 'Auto Test Contact',
      email: 'auto@example.com',
      phone: '9876543210'
    };

    await contacts.addContact(data);
    await expect(await contacts.findContactByName(data.name)).toBeVisible();
  });

  test('Edit Contact', async ({ page }) => {
    const contacts = new ContactsPage(page);

    const original = {
      name: 'Temp Contact',
      email: 'temp@example.com',
      phone: '9999999999'
    };

    await contacts.addContact(original);

    const row = contacts.findContactByName(original.name);
    await expect(row).toBeVisible();

    await row.locator('button:has-text("Edit")').click();
    await contacts.nameInput.fill('Updated Contact');
    await contacts.saveBtn.click();

    await expect(contacts.findContactByName('Updated Contact')).toBeVisible();
  });

  test('Delete Contact', async ({ page }) => {
    const contacts = new ContactsPage(page);

    const data = {
      name: 'Delete Me',
      email: 'deleteme@example.com',
      phone: '9080706050'
    };

    await contacts.addContact(data);

    const row = contacts.findContactByName(data.name);
    await expect(row).toBeVisible();

    await row.locator('button:has-text("Delete")').click();

    const confirmBtn = page.locator('text=Confirm');
    if (await confirmBtn.count() > 0) await confirmBtn.click();

    await expect(contacts.findContactByName(data.name)).toHaveCount(0);
  });

});
