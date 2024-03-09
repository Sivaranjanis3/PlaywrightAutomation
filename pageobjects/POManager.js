const {DashboardPage}=require('./DashboardPage');
const {LoginPage}=require('./LoginPage')
class POManager{
    constructor(page){
        this.page=page;
        this.loginPage=new LoginPage(page);
        this.dashboardPage=new DashboardPage(page);
    }

    getloginpage(){
        return this.loginPage;
    }

    getdashboardpage(){
        return this.dashboardPage;
    }
    
}
module.exports={POManager};