const {test , expect}  = require('@playwright/test')

test ('Handle checkboxes', async({page}) => {


await page.goto('https://rahulshettyacademy.com/AutomationPractice/');


// single checkbox

await page.locator('//input[@id="checkBoxOption1" and @type="checkbox"]').check();
//await page.check('//input[@id="checkBoxOption1" and @type="checkbox"]');

expect(await page.locator('//input[@id="checkBoxOption1" and @type="checkbox"]')).toBeChecked();
expect(await page.locator('//input[@id="checkBoxOption1" and @type="checkbox"]').isChecked()).toBeTruthy();
expect(await page.locator('//input[@id="checkBoxOption2" and @type="checkbox"]').isChecked()).toBeFalsy();


// muliple checkboxes

const checkboxLocators = [

    '//input[@id="checkBoxOption1" and @type="checkbox"]',
    '//input[@id="checkBoxOption2" and @type="checkbox"]',
    '//input[@id="checkBoxOption3" and @type="checkbox"]',


];

for (const locator of checkboxLocators) {

    await page.locator(locator).check();

}

for (const locator of checkboxLocators) {

    if(await page.locator(locator).isChecked()) {
        await page.locator(locator).uncheck(); // unselect mulitple checkboxes which are already selected..
    }
}

await page.waitForTimeout(4000);

});