const excelJS=require('exceljs');
const {test, expect} = require('@playwright/test');

async function exceltest(searchtext,replacetext,change,filepath){
    
const workbook=new excelJS.Workbook();
await workbook.xlsx.readFile(filepath);
    const worksheet=workbook.getWorksheet('Sheet1')
    
    const output=await readexcel(worksheet,searchtext);
    const cell=worksheet.getCell(output.row,output.column+change.colchange)
    console.log(output.column+change.colchange)
    cell.value=replacetext;
    await workbook.xlsx.writeFile(filepath)
}

async function readexcel(worksheet,searchtext){
    let output={row: 1,column:1};
    worksheet.eachRow((row,rownumber)=>{
        row.eachCell((cell,columnnumber)=>{
            if(cell.value==searchtext){
            output.row=rownumber;
            output.column=columnnumber;
        }
        });
    });
    return output;
}



test.only('Upload doenload test',async({page})=>{
    const textsearch="Mango";
    const updatevalue='350';
    await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
    const downloadpromise= page.waitForEvent('download')
    await page.getByRole('button',{name:'Download'}).click();
    await downloadpromise;
    await exceltest(textsearch,updatevalue,{rowchange:0,colchange:2},"C:/Users/SivaranjaniS/Downloads/download.xlsx");
    await page.locator('#fileinput').click();
    await page.locator('#fileinput').setInputFiles("C:/Users/SivaranjaniS/Downloads/download.xlsx");
    const textlocator=page.getByText(textsearch);
    const desiredrow=page.getByRole('row').filter({has:textlocator});
    await expect(desiredrow.locator('#cell-4-undefined')).toContainText(updatevalue);

});

test('Upload download test',async({page})=>{
    const searchtext="Mango";
    const updatevalue=350;
    await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
    const downloadpromise= page.waitForEvent('download');
    await page.locator('#downloadButton').click();
})