// // exports.LoginPage = class LoginPage {

// //     constructor(page) {
// //         this.page = page;
// //         this.loginLink = "#login2"
// //         this.usernameInput = '#loginusername';
// //         this.passwordInput = '#loginpassword';
// //         this.loginButton = '//button[normalize-space()="Log in"]';
// //     }

// //     async gotoLoginButton() {
// //         await this.page.goto('https://demoblaze.com/');

// //     }
// //     async login(userName, password) {
// //         await this.page.locator(this.loginLink).click();
// //         await this.page.locator(this.usernameInput).fill(userName);
// //         await this.page.locator(this.passwordInput).fill(password);
// //         await this.page.locator(this.loginButton).click();
        
// //     }

// // }

// // // pages/login.page.js
// // export class LoginPage {
// //   constructor(page) {
// //     this.page = page;
// //     this.signInBtn = page.locator('.login');
// //     this.emailInput = page.locator('#email');
// //     this.passwordInput = page.locator('#passwd');
// //     this.submitBtn = page.locator('#SubmitLogin');
// //   }

// //   async goto() {
// //     await this.page.goto('http://automationpractice.com/index.php');
// //   }

// //   async login(email, password) {
// //     await this.signInBtn.click();
// //     await this.emailInput.fill(email);
// //     await this.passwordInput.fill(password);
// //     await this.submitBtn.click();
// //   }
// // }


// exports.LoginPage = class LoginPage {
//   constructor(page) {
//     this.page = page;
//     this.loginLink = page.locator('a.ico-login');
//     this.emailInput = page.locator('#Email');
//     this.passwordInput = page.locator('#Password');
//     this.loginButton = page.locator('input.login-button');
//   }

//   async goto() {
//     await this.page.goto('https://demowebshop.tricentis.com/');
//   }

//   async login(email, password) {
//     await this.loginLink.click();
//     await this.emailInput.fill(email);
//     await this.passwordInput.fill(password);
//     await this.loginButton.click();
//   }
// }
module.exports.LoginPage =  

class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('#login-button');
  };

  async open() {
    await this.page.goto('https://www.saucedemo.com/');
  };

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
  };
};