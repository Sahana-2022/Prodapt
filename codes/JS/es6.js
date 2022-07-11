// var name = "Sahana";       //no scope

// let lang = "Javascript";    //let has block scope
// const data = "english";

// const menu = ["home", "about"]

// menu.push("services")   //works
//menu = {}               // Won't work 

// function welcome(){
//     console.log("welcome to arrow function")
// }
//Function can be rewritten as-

// let welcome=()=>{
//     console.log("welcome to arrow function")
// }
// welcome()

//or

//let welcome = () => console.log("Welcome to arrow function")
// let welcome = () => "welcome to arrow function"

// let sum = (a,b) => a+b ;

// let greet = name => `welcome to ${name}`

//rest and spread operator

//var numbers = [10, 39, 13, 79, 90]

//REST operator
function sum(...data){                     // 3 dots indicate that its resting as an array and looping it 
    var total=0;
        for(price of data){
            total += price;
        }
        return total;
}

//rest operator can be used in arrow functions as arrow functions doesn't take aruguments

//spread operator     
//Math.max(...data)

//template literals

//Destructuting 

// //  destructuring for arrays
// var numbers = [10,12,14,15,16,20]

// let [a,b] = numbers;
// let [a,...b] = numbers;             

// // Destructing for objects
var person ={
    name: "Sahana",
    email: "sahanamohan489@gmail.com"
}

var {name, email} = person

console.log(name)
console.log(email)

 