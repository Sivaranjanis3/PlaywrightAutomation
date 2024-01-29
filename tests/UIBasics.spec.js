const {test,expect}=require('@playwright/test');
test('First playwright code',async ({browser})=>{
const context= await browser.newContext();
const page=await context.newPage();
await page.goto("https://google.com")
});

test('Page playwright test',async ({page})=>{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
const username=page.locator('input#username');
const password=page.locator("[type='password']");
const signin=page.locator('input#signInBtn');
const cardtitles=page.locator('.card-body a');
console.log(await page.title());
//await expect(page).toHaveTitle("Google");

await username.fill("rahulshetty");
await password.fill("learning");
await signin.click();
console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText("Incorrect")

await username.fill("");
await username.fill("rahulshettyacademy");
await signin.click();

//console.log(await cardtitles.nth(1).textContent());
//console.log(await cardtitles.first().textContent());
const allcardtitles=await cardtitles.allTextContents();
console.log(allcardtitles);

});

test('Practice page',async ({page})=>{
await page.goto("https://rahulshettyacademy.com/client/")
console.log(await page.title());
await page.locator('a.btn1').click();
await page.locator('#firstName').fill("Sivaranjani");
await page.locator('#lastName').fill("Subramaniyan");
await page.locator('#userEmail').fill("sivaranjana3@gmail.com");
await page.locator('#userMobile').fill("9942380497");
await page.locator("[formcontrolname='occupation']").selectOption('Student')
await page.locator("[value='Female']").check();
await page.locator('#userPassword').fill("Sivaranjana@3");
await page.locator('#confirmPassword').fill("Sivaranjana@3");
await page.locator("[type='checkbox']").check();
await page.locator('#login').click();


});

test('Login ',async ({page})=>{
await page.goto("https://rahulshettyacademy.com/client/")
await page.locator('#userEmail').fill("sivaranjana3@gamil.com")
await page.locator('#userPassword').fill("Sivaranjana@3");
await page.locator('#login').click();
//await page.waitForLoadState('networkidle')
await page.locator('.card-body b').first().waitFor();
const titles=await page.locator('.card-body b').allTextContents();
console.log(titles);
});




test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.goto('https://www.google.com/search?q=rahulshetty+academy&oq=rahulshetty+academy&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCTEwMzg5ajBqNKgCALACAA&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Rahul Shetty Academy:' }).click();
  await page.getByRole('link', { name: ' Login' }).click();
});