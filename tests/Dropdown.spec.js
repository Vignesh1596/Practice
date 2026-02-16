const { test, expect } = require('@playwright/test')

test('Handle Dropdown', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Multiples way to select from the dropdown
    
    // await page.locator('#country').selectOption({label: 'India'}); // label in visible text
    // await page.locator('#country').selectOption('India'); // visible test
    // await page.locator('#country').selectOption({value: "usa"}); // by using value
    // await page.locator('#country').selectOption({index: 5}); // by using index
    // await page.selectOption('#country', 'India'); // by text


    // ASSERTIONS 

    //1) check number of options in dropdown     - method 1

    // const options = await page.locator('#country option');
    // await expect(options).toHaveCount(10);


    //2)  check number of options in dropdown     -method 2

    // const options=await page.$$('#country option');
    // console.log("number of options:" , options.length);
    // await expect(options.length).toBe(10);


    // 3) check presence of value in the dropdown   - method 1

    // const content=await page.locator('#country').textContent();
    // await expect(content.includes('India')).toBeTruthy();


    // 4) check presence of value in the dropdown     - method 2  using loop

    // const options = await page.$$('#country option');
    // let status = false;
    // for (const option of options) {

    //     //console.log(await option.textContent());
    //     const data = await option.textContent();
    //     if (data.includes('Germany')) {
    //         status = true;
    //         break;
    //     }

    // };
    // await expect(status).toBeTruthy();


    // 5) select options from dropdown using loop


const options =await page.$$('#country option');

for (const option of options ) {

    let value=await option.textContent();
    if (value.includes('brazil')) {
        await page.selectOption('#country' , value);
        break;
    }
};

await page.waitForTimeout(3000);

});