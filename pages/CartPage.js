// // exports.CartPage =
// //     class CartPage {

// //         constructor(page) {
// //             this.page = page;
// //             this.noOfProducts = '//tbody[@id="tbodyid"]/tr/td[1]'

// //         }

// //         async checkProductInCart(productName) {
// //             const productsInCart = await this.page.$$(this.noOfProducts)
// //             for (const product of productsInCart) {
// //                 console.log(await product.textContent())
// //                 if (productName === await product.textContent()) {
// //                     break;
// //                 }

// //             }
// //             return true;
// //         }
// //     }

// // // pages/cart.page.js
// // export class CartPage {
// //   constructor(page) {
// //     this.page = page;
// //     this.cartTitle = page.locator('#cart_title');
// //     this.productRow = page.locator('.cart_item');
// //     this.productName = this.productRow.locator('.product-name a');
// //   }

// //   async validateProductInCart() {
// //     await this.cartTitle.waitFor({ state: 'visible' });
// //     const productText = await this.productName.first().textContent();
// //     console.log('Product in cart:', productText);
// //     return productText;
// //   }
// // }

// exports.CartPage = class CartPage {
//   constructor(page) {
//     this.page = page;
//     this.cartTable = page.locator('.cart');
//     this.productNames = page.locator('.cart .product-name');
//   }

//   async validateProductInCart() {
//     await this.cartTable.waitFor({ state: 'visible' });
//     const productCount = await this.productNames.count();
//     expect(productCount).toBeGreaterThan(0);

//     const productName = await this.productNames.first().textContent();
//     console.log('Product in Cart:', productName.trim());
//   }
// }


module.exports.CartPage =

class CartPage {
  
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
  }

  async verifyProductInCart() {
    await this.cartItems.first().waitFor();
    const productCount = await this.cartItems.count();
    console.log('Products in cart:', productCount);
  
  }
};
