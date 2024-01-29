const {test,expect}=require('@playwright/test');
test('Client App Project',async ({page})=>{
    const productName="ZARA COAT 3"
    const products=page.locator(".card-body")
    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator('#userEmail').fill("anshika@gmail.com")
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
   const dropdownCount=drop.locator("button")
   for(let i=0;i<drop;i++){
    if(await drop.nth(i).textContent()==="india"){
        await drop.nth(i).click();
    }
   }

});