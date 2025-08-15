function shallowEquality(obj1,obj2){
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
    
    if(keys1.length !== keys2.length){
        return false
    } 
    for(let key of keys1){
        if(obj1[key] !== obj2[key]){
            return false
        }
    }

    return true
}

let student1 = {sid:126,firstname:"Akarawin",lastname:"Jariyalerpong"}
let student2= {sid:126,firstname:"Akarawin",lastname:"Jariyalerpong"}

// console.log(`shallowEquality:${shallowEquality(student1,student2)}`)

// 1.object literal+if-else
let student = {name:"Somchai",score:60}
function checkScore(){
if( student.score>= 50 ){
    return "Pass"
} else {
    return "Fail"
}
}

// console.log(checkScore())

// 2.Object Literal + for loop
let product1 = {applejuice : 30,protien:49}
function listProduncts(){
    let list = []
for(const key in product1){
    list.push(`${key}:${product1[key]}`) 
}
    return list
}
// console.log(listProduncts(product1))

// 3.Constructor Function + if-else
function Car(brand,speed){
    this.brand = brand
    this.speed = speed
    this.checkSpeed= function(){
        if(this.speed > 120){
            return "Fast"
        } else{
            return "normal"
        }
    }
}  
const car1 = new Car("benz",200)
// console.log(car1.checkSpeed())

// 4.Constructor Function + for loop
function Book(title,page){
    this.title = title
    this.page = page

} 
const books = [new Book("JS",345),new Book("html",245),new Book("Database",156)]
let info = []
for(let i = 0; i < books.length;i++){
    info.push(`${books[i].title} : ${books[i].page}`)
}
// console.log(info)

// 5. Class + if-else
class Account{
    constructor(owner,balance){
        this.ownre = owner
        this.balance = balance
    }
    withdraw(amount){
        if (this.balance > amount){
            return (`Balance:${this.balance}, Withdraw:${amount}  Withdrawal successful`)
        }
        return (`Balance:${this.balance}, Withdraw:${amount} Insufficient funds` )
    }
}
let acc1 = new Account("Puck",3000)
// console.log(acc1.withdraw(20000))
// 6. Class + for loop
class Team{
    constructor(members){
        this.members = members
    }
    showMembers(){
        let allmember = []
        for(const keys of this.members){
            allmember.push(keys)
        }
        return allmember
    }
}
let liverpool = new Team(["Jone","Salah","Nunez","Virjil"])
// console.log(liverpool.showMembers())
// 7. Object.create() + if-else
const dogPrototype = {
    bark : function (){
        console.log("Woof!")
    }
}
let dog = Object.create(dogPrototype);
dog.age = 3
// dog.bark()
if (dog.age  < 5){
    // console.log("Young Dog")
} else {
    // console.log("Old dog")
}

// 8. Defining & Adding Properties
const user = {}
user.username = "Puckky"
user.email = "puckky@gmail.com"
user.role = "admiin"
// console.log(user)
if (user.role === "admin"){
    // console.log ("Access granted")
} else {
    // console.log ("Access denied")
}

// 9. Functions by Reference + for loop
const counter={
    count : 0,
    increment(){
        this.count++
    }
}
let addOne = counter.increment.bind(counter)
for(let i = 0; i< 3 ;i++){
    addOne()
    // console.log(`round ${i + 1} :count = ${counter.count}`)
}
// console.log(counter.count)