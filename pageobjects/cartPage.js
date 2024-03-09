class cartPage{
    constructor(page){
        this.page=page;
        this.zaracoatvisible=page.locator("h3:has-text('ZARA COAT 3')");
        this.checkout=page.locator("text=checkout");
    }
    async gotocheckout(){
        await this.page.locator('div li').first().waitFor();
    const bool=await this.zaracoatvisible.isVisible();
    expect(bool).toBeTruthy();

    await this.checkout.click();
    }
}
module.exports={cartPage}