const {test , expect} = require('@playwright/test')

test('Page Screenshot' , async ({page}) => {

    await page.goto('https://www.amazon.in/');
    await page.screenshot({path : 'tests/screenshots/'+Date.now()+'HomePage.png'})
});

test('Full Page Screenshot' , async ({page}) => {

    await page.goto('https://www.amazon.in/');
    await page.screenshot({path :'tests/Screenshots/'+Date.now()+'FullPage.png',fullPage:true})
});

test.only('Element Screenshot' , async ({page}) => {

    await page.goto('https://demoblaze.com/index.html');
    await page.locator('//div[7]//div[1]//a[1]//img[1]').screenshot({path :'tests/Screenshots/'+Date.now()+'Select item.png'})

});
