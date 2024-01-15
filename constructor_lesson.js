const Persons=require('./class.js')
class Pet extends Persons
{
    get location(){
        return "Switzerland"
    }
    constructor(firstname,lastname){
        super(firstname,lastname)
    }
}

let Persion5=new Pet("Shiva","Ranjuma")
console.log(Persion5.fullname())
console.log(Persion5.location)