class ContactsPage {
  constructor(page) {
    this.page = page;
    this.addBtn = page.locator('button:has-text("Add Contact")');
    this.nameInput = page.locator('input[name="name"]');
    this.emailInput = page.locator('input[name="email"]');
    this.phoneInput = page.locator('input[name="phone"]');
    this.saveBtn = page.locator('button:has-text("Save")');
  }

  async goto() {
    await this.page.goto('/contacts');
  }

  async addContact({ name, email, phone }) {
    await this.addBtn.click();
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
    await this.saveBtn.click();
  }

  async findContactByName(name) {
    return this.page.locator(`tbody tr:has-text("${name}")`);
  }
}

module.exports = { ContactsPage };
