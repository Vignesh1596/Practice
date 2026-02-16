const{test , expect}=require('@playwright/test')

test('Handling Table' , async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table=await page.locator('#productTable');

    // 1) total numbers of rows and columns..

    const columns=await table.locator('thead tr th');
    console.log("Numbers of columns:" ,await columns.count());
    expect(await columns.count()).toBe(4);

    const rows=await table.locator('tbody tr');
    console.log("Numbers of rows:" , await rows.count());
    expect(await rows.count()).toBe(5);

// 2) select check box for product 4

const matchedrows=rows.filter ({
    has : page.locator('td'),
    hasText : 'Smartwatch'
});
const checkbox=matchedrows.locator('input');
await checkbox.check();

// // 3) select multiple products by re-usable fuunction..

await selectProduct(rows, page, "td");
await selectProduct(rows, page, "td");
await selectProduct(rows, page, "td");


// 4) print all the product details using loop..

for (let i = 0 ; i < await rows.count() ; i++) {
    const row=rows.nth(i);
    const tds=row.locator('td')

    for (let j = 0 ; j < await tds.count()-1 ; j++) {
        console.log(await tds.nth(j).textContent());
        
    }

}

// 5) read data from all the pages in the tables..

const pages=await page.locator('.pagination li a');
console.log("Numbers of pages in the table:" , await pages.count());

for (let p = 0; p < await pages.count() ; p++) {
    if (p > 0) {
        await pages.nth(p).click()
    }
for (let i = 0 ; i < await rows.count() ; i++) {
    const row=rows.nth(i);
    const tds=row.locator('td')

    for (let j = 0 ; j < await tds.count()-1 ; j++) {
        console.log(await tds.nth(j).textContent());
        
    }

}
}
    await page.waitForTimeout(3000);
});

async function selectProduct(rows , page , name ,) {
    rows.filter ({
        has : page.locator('td'),
        hasText : name
    })
    const checkbox=matchedrows.locator('input');
    await checkbox.check();
}
