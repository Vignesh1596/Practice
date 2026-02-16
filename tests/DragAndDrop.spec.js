const { test, expect } = require('@playwright/test')

test('Drag And Drop', async ({ page }) => {

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

    const rome = await page.locator('#box6');
    const italy = await page.locator('#box106');

    // Approach 1

    // await rome.hover();
    // await page.mouse.down();

    // await italy.hover();
    // await page.mouse.up();


    // Approach 2

    await rome.dragTo(italy);

    const seoul = await page.locator('#box5');
    const southKorea = await page.locator('#box105');
    await seoul.dragTo(southKorea);

    await page.waitForTimeout(3000)

});