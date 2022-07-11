//Declare the function
function fn(){
    console.log("This is a function")
}

//call the function
// fn()

//return from the function
function fn(){
    return "This is a function"
}

//passing params to the function

function sum(a,b){
    var total=a+b;
    return total;
}

//sum(34,10,20) //passing additional args will be ignored
//sum(10) //returns NaN
//calling function with () -> returns itself


//passing n number of arguments using builtin "arguments" array inside the function

var cart = [
    {
        productId: 1,
        brand: "mi",
        price:21000,
        qty: 2
    },
    {
        productId: 2,
        brand: "samsung",
        price:30000,
        qty: 3
    },
    {
        productId: 3,
        brand: "poco",
        price:18000,
        qty: 1
    },
    {
        productId: 4,
        brand: "motorola",
        price:25000,
        qty: 2
    },
       
]


function getCartTotal(data){
    var total=0;
    for(product of data){
        var itotal=0;
        itotal=product.price*product.qty;
        console.log("Quantity=",product.qty,"Total amount",itotal);
        total+=product.price*product.qty; 
    }
    console.log("Total amount=",total);
    
}
getCartTotal(cart)


// function getCartTotal(){
//     //console.log(arguments)
//     var total=0;
//     for(price of arguments){
//         total += price;
//     }
//     return total;
// }

//hoisting
// welcome()
// function welcome(){
//     console.log("Welcome function")
// }


// //declare function in literal way
// var greet = function(){
//     console.log("Greet function")
// }
// greet()

(function(name){
    console.log(name,"Self invoking funcion")
})("sahana")

function welcome(){
    return "welcome";
    //console.log("This is the next line")  // anything written after return won't work
}



