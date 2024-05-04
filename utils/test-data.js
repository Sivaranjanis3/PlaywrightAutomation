const base=require('@playwright/test');

exports.customtest=base.test.extend({
    testdataforOrder:{
        username:"anshika@gmail.com",
        password:"Iamking@000",
        productName:"ZARA COAT 3"
    
    }
})