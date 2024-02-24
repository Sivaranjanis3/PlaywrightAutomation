const {test, expect, request} = require('@playwright/test');
const {APIUtils}=require('./utils/APIUtils');
const payload={userEmail:"anshika@gmail.com",userPassword:"Iamking@000"};
const orderpayload={orders: [{country: "India", productOrderedId: "6581ca399fd99c85e8ee7f45"}]}
let response;

test.beforeAll(async()=>{
   const apicontext=await request.newContext();
  const apiutils= new APIUtils(apicontext,payload);
  response=await apiutils.createOrder(orderpayload);


});
 
 
 
test('Client App Project',async ({page})=>{

   page.addInitScript(value=>{
      window.localStorage.setItem('token',value)
   },response.logintoken);
   const email="anshika@gmail.com"
   const productName="ZARA COAT 3"
   const products=page.locator(".card-body")
   await page.goto("https://rahulshettyacademy.com/client")
   
await page.locator("[routerlink='/dashboard/myorders']").first().click();
const rows=await page.locator("tbody tr");
for(let i=0;i<await rows.count();i++){
   const itemId=await rows.nth(i).locator("th").textContent();
   if(response.orderId.includes(itemId)){
       await rows.nth(i).locator("button").first().click();
       break;
      
   }
}



});