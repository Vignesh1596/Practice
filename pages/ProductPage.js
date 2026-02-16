// // exports.HomePage =
// // class HomePage {

// //     constructor(page) {
// //         this.page = page;
// //         this.productList = '//*[@id="tbodyid"]/div/div/div/h4/a';
// //         this.addToCartbtn = '//a[normalize-space()="Add to cart"]';
// //         this.cart = '#cartur'
// //     }

//     async addProductToCart(productName) {
//         const productList=await this.page.$$(this.productList);
//         for(const product of productList) {
//             if (productName === await product.textContent()) {
//                 await product.click();
//                 break;
//             }
//         }
//         await this.page.on('dialog' , async dialog =>{
//             if(dialog.message().includes('added')) {
//                 await dialog.accept();
//             }
//         })
//         await this.page.locator(this.addToCartbtn).click();
//     }
//     async gotoCart() {
//         await this.page.locator(this.cart).click();
//     }
// }

// // // pages/home.page.js
// // export class HomePage {
// //   constructor(page) {
// //     this.page = page;
// //     this.productItem = page.locator('.product-container').first();
// //     this.addToCartBtn = this.productItem.locator('.ajax_add_to_cart_button');
// //     this.successModal = page.locator('#layer_cart');
// //     this.proceedToCheckoutBtn = page.locator('a[title="Proceed to checkout"]');
// //   }

// //   async selectProductAndAddToCart() {
// //     await this.page.goto('http://automationpractice.com/index.php');
// //     await this.productItem.hover();
// //     await this.addToCartBtn.click();
// //     await this.successModal.waitFor({ state: 'visible' });
// //   }

// //   async proceedToCheckout() {
// //     await this.proceedToCheckoutBtn.click();
// //   }
// // }


// exports.HomePage = class HomePage {
//   constructor(page) {
//     this.page = page;
//     this.firstProduct = page.locator('.product-item').first();
//     this.addToCartBtn = this.firstProduct.locator('input[value="Add to cart"]');
//     this.cartLink = page.locator('a[href="/cart"]');
//   }

//  async addProductToCart() {
//   await this.addToCartBtn.click();

//   // Wait until the success notification is visible
//   const successNotification = this.page.locator('.bar-notification.success');
//   await successNotification.waitFor({ state: 'visible', timeout: 5000 });

//   // Optional: close notification to avoid blocking further clicks
//   const closeBtn = successNotification.locator('.close');
//   if (await closeBtn.isVisible()) {
//     await closeBtn.click();
//   }
// // }

//   async goToCart() {
//     await this.cartLink.click();
//   }
// }


module.exports.ProductsPage = 

class ProductsPage {
  constructor(page) {
    this.page = page;
    this.firstProductAddBtn = page.locator("#add-to-cart-sauce-labs-backpack");
    this.cartLink = page.locator('.shopping_cart_link');
  };

  async addProductToCart() {
    await this.firstProductAddBtn.click();
  };

  async goToCart() {
    await this.cartLink.click();
  };
};