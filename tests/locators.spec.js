
  import {test , expect} from '@playwright/test'

  test('locators' , async({page}) => {

    await page.goto('https://demoblaze.com/');

    // click on login button   -> property

    //await page.locator('id=login2').click();
    await page.click('id=login2')

    // provide username   -> CSS

    //await page.locator('#loginusername').fill('pavanol');
    await page.fill('#loginusername' , 'pavanol');
    //await page.type('#loginusername' , 'pavanol');

    // provide password   -> CSS

    await page.fill("//input[@id='loginpassword']" , 'test@123');

    // click on login button

    await page.click('//button[contains(text(),"Log")]');

    // verify logout link presence

    const logoutLink = await page.locator('//a[contains(@id,"logout2")]');


    await expect(logoutLink).toBeVisible({timeout:7000});

    await page.close();



    

  });