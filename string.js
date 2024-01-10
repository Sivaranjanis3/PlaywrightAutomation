const { count } = require("console")

let namedf='tuesday '
console.log(namedf.length)
let namesec=namedf.slice(0,4)
console.log(namesec)
console.log(namesec[3])
let arng=namedf.split("s")
console.log(arng[1])
console.log(arng[1].trim().length)
day="23"
nextday="27"
let diff=parseInt(nextday)-parseInt(day)
console.log(diff)
console.log(diff.toString())

let con=namedf+"is a funday"
console.log(con)
let indx=namedf.indexOf("day",5)
console.log(indx)
let counto=0
let val=con.indexOf("day")
while(val!==-1)
{
counto++
val=con.indexOf("day",val+1)
}
console.log(counto)