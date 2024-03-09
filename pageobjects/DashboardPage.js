class DashboardPage{
constructor(page){
    this.products=page.locator(".card-body");
    this.cart=page.locator("[routerlink='/dashboard/cart']");

}

async searchproduct(productName){
    await this.products.nth(1).waitFor();
    const count1=await this.products.count();
    console.log(count1)
    for(let i=0;i<count1;++i){
       if(await this.products.nth(i).locator('b').textContent()===productName){
            console.log(await this.products.nth(i).locator('b').textContent())
            await this.products.nth(i).locator('text= Add To Cart').click();
            console.log(i)
            break;
        }
    }
}

async navigatetocart(){
    await this.cart.click();
}
}

module.exports={DashboardPage};