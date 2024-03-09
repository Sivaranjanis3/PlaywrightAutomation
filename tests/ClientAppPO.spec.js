const {test,expect}=require('@playwright/test');
const {POManager}=require('../pageobjects/POManager')
const {cartPage}=require('../pageobjects/cartPage')
const data=JSON.parse(JSON.stringify(require('../utils/placeordertestdata.json')))
const { log } = require('console');
test('Client App Project',async ({page})=>{
    const pomanager= new POManager(page);
    const loginPage=pomanager.getloginpage();
    await loginPage.goto();
    await loginPage.validLogin(data.username,data.password)
    const dashboardPage=pomanager.getdashboardpage();
    await dashboardPage.searchproduct(data.productName);
    await dashboardPage.navigatetocart();
    const cartpage=new cartPage(page);
    await cartpage.gotocheckout();
    
    
    await page.locator('div li').first().waitFor();
    const bool=await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();

    await page.locator("text=checkout").click();
    await page.locator("[placeholder*='Country']").pressSequentially("ind");
    await page.locator(".ta-results").waitFor();
   const drop= await page.locator(".ta-results");
   const dropdownCount=await drop.locator("[type='button']").count();
   console.log("Drop down count"+dropdownCount);
   for(let i=0;i<dropdownCount;++i){
    if(await drop.locator("[type='button']").nth(i).textContent()===" India"){
        await drop.locator("[type='button']").nth(i).click();
        break;
    }
   }
 await expect(page.locator(".user__name [type='text']").first()).toHaveText(data.username)
 await page.locator(".btnn").click();
 await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ")
 const id=await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
 console.log(id)
await page.locator("[routerlink='/dashboard/myorders']").first().click();
const rows=await page.locator("tbody tr");
for(let i=0;i<await rows.count();i++){
    const itemId=await rows.nth(i).locator("th").textContent();
    if(id.includes(itemId)){
        await rows.nth(i).locator("button").first().click();
        break;
       
    }
}


 });