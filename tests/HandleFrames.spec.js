const { test, expect } = require('@playwright/test')

test('Frames', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    // total frames

    const allFrames = await page.frames();
    console.log("Numbers of frames:", allFrames.length);

    //  approach 1 : using name or url..

    //const frameName=await page.frame('name'); // if name is present, we can use this..

    const frame1 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_1.html" });
    await frame1.fill('//input[@name="mytext1"]', "Hello");


    // approach 2 : using frame locator..

    const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']");
    inputBox.fill("Hi , Sundar");

    await page.waitForTimeout(3000);
});