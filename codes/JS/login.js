var loginform = document.getElementById("loginform");

loginform.addEventListener("submit",function(e){
    e.preventDefault();
    // var userval = document.getElementById("username").value;
    // console.log(userval)
    //var userval = document.getElementById("username");
    // console.log(userval.value)
    //console.log(loginform.elements['username'].value)

    var user_name = loginform.elements['username'].value;
    if(user_name.length > 6){
        console.log("User name must be only 6 characters");
        return null;
    }
    var pass_word = loginform.elements['password'].value;
    var phone_no = loginform.elements['phone'].value;

    // var loginData = {
    //     uname : user_name,    // uname is property 
    //     passwrd: pass_word
    // }

    var loginData = {
        user_name,     
        pass_word,
        phone_no
    }

    console.log(loginData)
    console.log(JSON.stringify(loginData))
})






















// {
//     username: "sahana",
//     password: 9328902398
// }