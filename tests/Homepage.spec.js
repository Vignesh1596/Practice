//const {test , expect}  = require('@playwright/test')

  import {test , expect} from '@playwright/test'

// Imports Playwright’s built-in test functions:

// - `test` → used to write test cases  
// - `expect` → used to validate values (assertions)  

//  Always include this line in any Playwright test file.

test ('Home page' ,  async ({page}) => {

// async ({ page }) => {} is an async function with page as a built-in Playwright browser tab object.

// page is the Playwright object that represents a single browser tab.
// We use it to load websites and interact with all elements on the webpage—just like a real user. 
// It is essential for any browser-based test."

// Interact with it (click, type, etc.)

// Validate things like title, URL, text, etc.

await page.goto('https://demoblaze.com/');

//Opens the URL `https://demoblaze.com` in a new browser tab.
//  `await` is used because loading a page takes time.
  

const pageTitle = page.title();
console.log('page tile is:' , pageTitle);

await expect(page).toHaveTitle('STORE');

const pageURL = page.url();

console.log('page title is:' , pageURL);


await expect(page).toHaveURL("https://demoblaze.com/");

await page.close();

});


// require('@playwright/test')` -> Import testing tools..
// test(...)`                   -> Start of test case ..
// page.goto(...)`              -> Load website ..
// page.url()`                  -> Get current URL ..
// page.title()`                -> Get title of the page .. 
// console.log(...)`            -> Output to terminal ..
// expect(...).toHaveURL(...)`  -> Check if URL matches ..
// expect(...).toHaveTitle(...) -> Check if title matches ..
// page.close()`                -> Close browser tab ..


// npx playwright test  -> normal code to run the test case

// npx playwright test (file name) --project chromium   -> to run specific browser

// npx playwright test (file name) --project=chromium --headed 

// px playwright test (file name) --project=chromium --headed --debug  -> to see every steps of the program..