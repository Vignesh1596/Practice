const { test, expect } = require('@playwright/test')

test('Frames', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');


    const frames3 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_3.html" });
    // frames3.locator("//input[@name='mytext3']").fill('Welcome');


    // Nested frames

    const childFrames = await frames3.childFrames();
    await childFrames[0].locator("#i24").check();

    await page.waitForTimeout(3000);
});