const { test, expect } = require('@playwright/test')

test('Date pickers', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.fill('#datepicker' , '09/17/2025');

    const year = "2020"
    const month = "December"
    const date = "20"

await page.click('#datepicker');  // opens calender

while(true) {
    const currentYear=await page.locator('.ui-datepicker-year').textContent();
    const currentmonth=await page.locator('.ui-datepicker-month').textContent();

    if ( currentYear == year && currentmonth == month) {
        break;
    } else {
        console.log("If not executed,print this");
        
    }
    //await page.locator('//a[@title="Next"]').click(); // Next..
     await page.locator('//a[@title="Prev"]').click(); // previous..
}


const dates=await page.$$("//a[@class='ui-state-default']");

// date selection using loop

// for (const dt of dates) {

//     if(await dt.textContent() == date) {
//         await dt.click();
//         break;
//     }
// }

// date selection - without loop

await page.click(`//a[@class='ui-state-default'][text()='${date}']`)

   await page.waitForTimeout(3000);
})