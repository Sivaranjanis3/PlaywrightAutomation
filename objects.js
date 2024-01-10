const { log } = require("console")

let person={
    firstname:"Siva",
    lastname: "ranjani",
    fullname:function()
    {
        console.log(this.firstname+this.lastname)
    }
}
console.log(person.fullname())
console.log(person.firstname)
console.log(person["firstname"])
//person.firstname="Muruga"
console.log(person.firstname)
person.gender="Female"
console.log(person)
delete person.gender
console.log(person)

console.log("gender" in person)

for(let key in person){
    console.log(person[key])
}