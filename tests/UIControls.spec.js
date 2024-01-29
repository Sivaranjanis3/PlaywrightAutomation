const {test,expect}=require('@playwright/test');
test('UI Controls',async ({page})=>{
page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const username=page.locator('input#username');
const password=page.locator("[type='password']");
const dropdown=page.locator('select.form-control');
await username.fill("rahulshettyacademy");
await password.fill("learning");
await dropdown.selectOption('Consultant');
await page.locator('.radiotextsty').last().click();
await page.locator('#okayBtn').click();
console.log(await page.locator('.radiotextsty').last().isChecked());
await expect(page.locator('.radiotextsty').last()).toBeChecked();
await page.locator('#terms').click();
await expect(page.locator('#terms')).toBeChecked();
await page.locator('#terms').uncheck();
console.log(await page.locator('#terms').isChecked());
expect(await page.locator('#terms').isChecked()).toBeFalsy();
//check the blinking
const blinkcheck=page.locator("[href*='documents-request']");
await expect(blinkcheck).toHaveAttribute("class","blinkingText");
//await page.pause();

});