const {test , expect} = require ('@playwright/test')

test ('Test 1@Hello' , async ({page}) => {

    console.log("This is Tag Concept 1");
    
});
test ('Test 2@Hello' , async ({page}) => {

    console.log("This is Tag Concept 2");
    
});
test ('Test 3@Hi' , async ({page}) => {

    console.log("This is Tag Concept 3");
    
});
test ('Test 4@Hi' , async ({page}) => {

    console.log("This is Tag Concept 4");
    
});
test ('Test 5@Hello@Hi' , async ({page}) => {

    console.log("This is Tag Concept 5");
    
});