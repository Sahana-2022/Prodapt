var a=10; //Global variables

function sumTen(){
    var b=20;          //private variables
    b=20;              // without var keyword then its a global variable
    return a+b;

}

sumTen()
//console.log(b)


//Lexical scope

var name="venkat";

function parent(){
    var x=10;
    function child(){
        return x+20;
    }
    return child();
}

var calc = parent()
calc()