var a=4
console.log(a)
console.log(typeof(a))
var b="Sivaranjani"
console.log(typeof(b))
var c=false
console.log(typeof(c))

req="sivaranjani"
console.log(typeof(req))
console.log(!c)

if(!c){
    console.log("Condition satisfied")
}
else{
    console.log("Condition not satisfied")
}

let i=0
while(i<10){
    //i++
    console.log(i)
    i++
}

do{
    console.log(i)
    i++
}while(i>10);

console.log("For Loop")
let n=0
for(let k=1;k<=100;k++)
{
   if(k%2==0 && k%5==0)
    {
        n++
        console.log(k)
        if(n==3)
        break;
    }
}