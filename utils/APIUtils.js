class APIUtils{

    constructor(apicontext,payload){
       this.apicontext= apicontext;
       this.payload=payload;
    }

async getToken(){
    const loginresponse=await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
        data:this.payload});
        console.log(this.payload)
    //expect(loginresponse.ok()).toBeTruthy();
    const loginresponsejson=await loginresponse.json();
    console.log(loginresponsejson);
    const logintoken=loginresponsejson.token;
    console.log(logintoken)
    return logintoken;

}

async createOrder(orderpayload){
    let response={};
    response.logintoken=await this.getToken()
    const orderresponse=await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
  {
   data: orderpayload,
   headers:{
      'Authorization' : response.logintoken,
      'Content-Type' : 'application/json'
   },

  })

  const orderresponsejson=await orderresponse.json();
  console.log(orderresponsejson);
  const orderId=orderresponsejson.orders[0];
  response.orderId=orderId
  return response;

}

}
module.exports={APIUtils};