const{test,expect}= require('@playwright/test');
test('More Validation',async({page})=>{
 await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
 //await page.goto("https://google.com");
 //await page.goBack();
 //await page.goForward();

 expect(await page.locator("#displayed-text")).toBeVisible();
 await page.locator("#hide-textbox").click();
 expect(await page.locator("#displayed-text")).toBeHidden();
 //await page.pause();
 page.on('dialog',dialog=>dialog.accept());
 await page.locator("#confirmbtn").click();
 await page.locator("#mousehover").hover();
 const framepage= page.frameLocator("#courses-iframe")
 await framepage.locator("li a[href*='lifetime-access']:visible").click();
 const cont=await framepage.locator(".text h2").textContent();
 console.log(cont.split(" ")[1])

});

test.only('Sccreeenshot & visual comaprision',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    expect(await page.locator("#displayed-text")).toBeVisible();
    await page.locator("#displayed-text").screenshot({path:'locator screenshot.png'});
 await page.locator("#hide-textbox").click();
 await page.screenshot({path:'screenshot.png'})
 expect(await page.locator("#displayed-text")).toBeHidden();

});

test.only('Visual comparision',async({page})=>{
await page.goto("https://flightware.com/");
expect(await page.screenshot()).toMatchSnapshot('landing.png');
});