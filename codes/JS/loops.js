var i=0;

// while(i<10){
//     console.log("i values is: ",i);
//     i++;
// }

// do{
//     console.log("i values is: ",i);
//     i++;
// }while(i<10)

// for(var i=0;i<=10;i++){
//     console.log("i value is: ",i)
// }

// var brands=["poco","lenovo","samsung","oneplus","mi"];
// var brandlength = brands.length;
// for(var i=0; i<brandlength;i++){
//     console.log("Brand name is: ",brands[i])
// }

// var student=["tina","riya","rita","preeta","geetha"];
// for(var i=0; i<student.length;i++){
//     console.log("Student's name is: ",student[i])
// }
//for(i in student){
//    console.log(i, student[i])
//}

// console.time("phones")
var phones =[
    {
        brand:"Lenovo",
        price:12000,
        color:"Silver black"
    },
    {
        brand:"Samsung",
        price:21000,
        color:"Black"
    },
    {
        brand:"Motorola",
        price:18000,
        color:"Light Green"
    },
    {
        brand:"POCO",
        price:15000,
        color:"Blue"
    }
]

// using for loop
// var phonelength = phones.length;
// for(var i=0;i<phonelength;i++){
//     console.log("Phone details are: ",phones[i])
// }

//using For of
// for(phone of phones){
//     console.log(phone)
// }

//using for in
for(phone of phones){
    console.log(phone.brand)
    console.log(phone.price)
    console.log(phone.color)

}

for(phone of phones){
    console.log("Brand: ",phone.brand)
    console.log("Price: ",phone.price)
    console.log("Color: ",phone.color)
}

for(phone of phones){
    for(key in phones){
        console.log(key,phone[key])
    }
}
// console.timeEnd("phones")

