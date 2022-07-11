var username = "Sahana";
var password = "29849349";

if(username){
    console.log("Enter password")
}else if(password){
    console.log("You can login")
}else{
    console.login("you cannot login")
}


var age=2;

if(age=>18){
    console.log("You are eligible for the drivers license")
}else if(age<18){
    console.log("You are not eligible for drivers license")
}else{
    console.log("Check")
}

switch(username){
    case "uname":console.log("unsername is incorrect")
    break;
    case "Sahana":console.log("username is correct")
    break;
    default: console.log("try with correct user name")
}

switch(age){
    case "1":console.log("you are eligible")
    break;
    case "2":console.log("you are eligible")
    break;
    case "3":console.log("you are not eligible")
    break;
    default:console.log("enter your age")
}

