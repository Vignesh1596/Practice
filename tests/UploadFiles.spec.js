const{test , expect} = require('@playwright/test')

test('Single File' , async({page}) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('#filesToUpload').click();

    await page.locator('#filesToUpload').setInputFiles('tests/uplodefile/testfile3.pdf');

    await page.waitForTimeout(2000);
    

});

test.only('Multiple Files' , async ({page}) => {

     await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

     await page.locator('#filesToUpload').setInputFiles(['tests/uplodefile/testfile3.pdf' , 'tests/uplodefile/testfile4.pdf']);

     await page.waitForTimeout(3000);

     expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('testfile3.pdf');
     expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('testfile4.pdf');

     await page.waitForTimeout(2000);


     // Removing Files

     await page.locator('#filesToUpload').setInputFiles([]);

     expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');

     await page.waitForTimeout(2000);
})