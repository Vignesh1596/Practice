class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.locator('input[type="email"]');
    this.password = page.locator('input[type="password"]');
    this.loginBtn = page.locator('button:has-text("Login")');
    this.registerLink = page.locator('text=Register');
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginBtn.click();
  }
}

module.exports = { LoginPage };
