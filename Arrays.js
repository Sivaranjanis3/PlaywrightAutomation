var marks=Array(5)
var marks= new Array(10,20,30,40,50)
var marks=[10,20,30,40,50]
console.log(marks)
console.log(marks[2])
console.log(marks.indexOf(20))
marks.push(60)
console.log(marks)
marks.pop(30)
console.log(marks)
console.log(marks.length)
marks.shift(0)
console.log(marks)

console.log(marks.includes(120))
submarks=marks.slice(2,5)
console.log(submarks)

var sum=0
for(let i=0;i<marks.length;i++){
    sum=sum+marks[i]
    console.log("I value is"+i+"Sum is"+sum)
}

let totals=marks.reduce((sum,mark)=>sum+mark,0)
console.log(totals)
//filter operation
let score=[10,12,13,14,16]
let evenscore=[]
for(let y=0;y<score.length;y++)
{
    if(score[y]%2==0){
        evenscore.push(score[y])
    }
    
}
console.log(evenscore)
var evenscores=score.filter(scor=>scor%2==0)
console.log(evenscores)

//map
let mappedvalue=evenscore.map(scor=>scor*3)
console.log(mappedvalue)

let final=mappedvalue.reduce((sum,scor)=>sum+scor,0)
console.log(final)

//using chain reaction
let final1=score.filter(scor=>scor%2==0).map(scor=>scor*3).reduce((sum,scor)=>sum+scor,0)
console.log(final1)

//sorting
let fruits=["Banana","Apple","Daer","Carrot"]
console.log(fruits.sort())
console.log(fruits.reverse())

let num=[12,10,11,14]
console.log(num.sort((a,b)=>a-b))
console.log(num.reverse((a,b)=>a-b))

