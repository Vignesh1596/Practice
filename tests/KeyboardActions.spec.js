const { test, expect } = require('@playwright/test')

test('Keyboard Actions', async ({ page }) => {

    await page.goto('https://gotranscript.com/text-compare');

    await page.locator('[name="text1"]').fill("Hello, This is Riyaz..");

    // Ctrl A - select the text

    await page.keyboard.press('Control+A');

    // Ctrl C - copy the text

    await page.keyboard.press('Control+C');

    // Tab

    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    //Ctrl V  - paste the text

    await page.keyboard.press('Control+V')

    await page.waitForTimeout(3000);

})