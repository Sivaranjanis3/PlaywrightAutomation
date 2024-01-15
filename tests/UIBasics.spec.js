const {test,expect}=require('@playwright/test');
test('First playwright code',async ({browser})=>{
const context= await browser.newContext();
const page=await context.newPage();
await page.goto("https://google.com")
});

test('Page palywright test',async ({page})=>{
await page.goto("https://google.com")
console.log(await page.title());
await expect(page).toHaveTitle("Google");
});