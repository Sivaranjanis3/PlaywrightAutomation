const {test,expect}=require('@playwright/test');
test('Child window handles',async ({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    const username=page.locator('input#username');
await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
const documentlink=page.locator("[href*='documents-request']");
const [newPage]=await Promise.all(
[context.waitForEvent('page'),
documentlink.click(),
])

const content=await newPage.locator('.red').textContent();
const arraytext=content.split("@")
const domain=arraytext[1].split(" ")[0]
console.log(domain)
await username.fill(domain);
await page.pause();
console.log(await username.textContent());

});