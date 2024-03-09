class LoginPage{

constructor(page)
{
    this.page=page;
    this.signinbutton=page.locator("[name='login']");
    this.username=page.locator('#userEmail');
    this.password=page.locator('#userPassword');
}

async goto(){
    await this.page.goto("https://rahulshettyacademy.com/client");
}
 
async validLogin(email,password){
    await this.username.fill(email)
    await this.password.fill(password);
    await this.signinbutton.click();
}

}
module.exports={LoginPage};