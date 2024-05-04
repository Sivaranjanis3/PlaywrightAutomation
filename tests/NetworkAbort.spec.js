const {test,expect}=require('@playwright/test');
test('First playwright code',async ({browser})=>{
const context= await browser.newContext();
const page=await context.newPage();
await page.goto("https://google.com")
});
test('Page playwright test',async ({page})=>{
    await page.route('**/*.{jpg,png,jpeg}'
,route=>route.abort());
await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
page.on('request',request=>console.log(request.url()));
page.on('response',response=>console.log(response.url(),response.status()))
const username=page.locator('input#username');
const password=page.locator("[type='password']");
const signin=page.locator('input#signInBtn');
const cardtitles=page.locator('.card-body a');
console.log(await page.title());
//await expect(page).toHaveTitle("Google");

await username.fill("rahulshettyacademy");
await password.fill("learning");
await signin.click();
console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText("Incorrect")

//console.log(await cardtitles.nth(1).textContent());
//console.log(await cardtitles.first().textContent());
const allcardtitles=await cardtitles.allTextContents();
console.log(allcardtitles);

});
