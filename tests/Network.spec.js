const { test, expect, request } = require('@playwright/test');
const { APIUtils } = require('./utils/APIUtils');
const { runInContext } = require('vm');
const payload = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" };
const orderpayload = { orders: [{ country: "India", productOrderedId: "6581ca399fd99c85e8ee7f45" }] }
let response;
let emptypayload = { data: [], message: "No Orders" }

test.beforeAll(async () => {
   const apicontext = await request.newContext();
   const apiutils = new APIUtils(apicontext, payload);
   response = await apiutils.createOrder(orderpayload);


});



test('Client App Project', async ({ page }) => {

   page.addInitScript(value => {
      window.localStorage.setItem('token', value)
   }, response.logintoken);
   const email = "anshika@gmail.com"
   const productName = "ZARA COAT 3"
   const products = page.locator(".card-body")
   await page.goto("https://rahulshettyacademy.com/client")
   page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*", route => {
      const response1 = page.request.fetch(route.request());
      const body = JSON.stringify(emptypayload);
      route.fulfill(
         {
            response1,
            body,
         }
      )
   });

   await page.locator("[routerlink='/dashboard/myorders']").first().click();

   //await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
   console.log(await page.locator(".mt-4").textContent());


});