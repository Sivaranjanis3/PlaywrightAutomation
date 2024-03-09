const excelJS=require('exceljs')
//method 1
//const workbook=new excelJS.Workbook();
//workbook.xlsx.readFile("C:/Users/SivaranjaniS/Downloads/Exceldownloadtest.xlsx").then(function(){
//    const worksheet=workbook.getWorksheet('Sheet1')
//    worksheet.eachRow((row,rownumber)=>{
//        row.eachCell((cell,columnnumber)=>{
//            console.log(cell.value)
//        });
//    });
//})



//method 2
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

exceltest("Mango",350,{rowchange:0,colchange:2},"C:/Users/SivaranjaniS/Downloads/Exceldownloadtest.xlsx");
