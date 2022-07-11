//alert("Welcome to Javascript");

//Primitive data types

// var name="Java script";
// var price =90;
// alert(name);

// console.log(name);
// console.log(price);

// var brand, price, category;

// brand="Lenovo"

// category=null

var category="Phones";
var brand="POCO";
var price= 27000; 
var color="Night Black"
var ram = 6; 
var rom= 128;
var warranty=2;
var battery=4200;



var firstName ="Sahana";
var secondName = "Mohan";
// var lastName = firstName + secondName;

//template literals
var fullName = `Welcome ${firstName} ${secondName}`;

//complex data types

//Arrays

var student=["Sahana",{name: "sahana"},90,null,fullName,[1,2,4,[34,67]]];

//object

var dog = {
    color:"goldenbrown",
    height:"2 feet",
    price: 25000,
    breed:"golden retriever",
    activities: ["play","barks","eats"],
    runs: function(){
        console.log("Dog runs")
    },
    eats: function(){
        console.log("Dog eats")
    }
}

// objectname.propertyname
console.log(dog.color)
console.log(dog.height)
console.log(dog.runs())
console.log(dog.eats())

//Function

function functionName(){
    var lang="English";
    console.log(lang);
}

// functionName()

function cook(param1,param2,param3){
    var result = `By using ${param1} and ${param2} and ${param3} I made recipe`; 
    return result;
}

cook(rice,chicken,masala)

function sum(a,b){
    return a+b;
}
