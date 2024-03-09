const { test, expect, request } = require('@playwright/test');

test('Client App Project', async ({ page }) => {
    const email="anshika@gmail.com"
    const productName="ZARA COAT 3"
    const products=page.locator(".card-body")
    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator('#userEmail').fill(email)
    await page.locator('#userPassword').fill("Iamking@000");
    await page.locator("[name='login']").click();
    //await page.getByRole('button', { name: 'Login' }).click();
    await products.nth(1).waitFor();
    const count1=await products.count();
    console.log(count1)
    for(let i=0;i<count1;++i){
       if(await products.nth(i).locator('b').textContent()===productName){
            console.log(await products.nth(i).locator('b').textContent())
            await products.nth(i).locator('text= Add To Cart').click();
            console.log(i)
            break;
        }
    }
    await page.locator("[routerlink='/dashboard/cart']").click();
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
 await expect(page.locator(".user__name [type='text']").first()).toHaveText(email)
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


    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
    route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6' }))
await page.locator("button:has-text('View')").first().click();
    await page.pause();

});