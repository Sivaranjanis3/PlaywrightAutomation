const { Console } = require("console")

class Person{
    age=23
    //location="canada"
    get location(){
        return "canada"
    }
    constructor(firstname,lastname){
        this.firstname=firstname
        this.lastname=lastname
    }
    fullname(){
        console.log(this.firstname+this.lastname)
    }

}
//let person=new Person("Siva","Ranjani")
//let person1=new Person("Muruga","nantham")
//console.log(person.age)
//console.log(person.location)
//console.log(person.fullname())
//console.log(person1.fullname())
module.exports=Person;