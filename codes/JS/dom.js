//document object
//create div element and store in a variable
var divEle = document.createElement("div");

//add div to body
//wheretoadd.appendChild (whattoadd)

//create text node
document.body.appendChild(divEle);


//add text node to div element
var textEl = document.createTextNode("some text");

//add text node to div element
divEle.appendChild(textEl);

//add attribute
divEle.setAttribute("id","test");

//read or get element by id or class
var getById = document.getElementById("test");

//remove elements
//getById.remove();
//document.getElementById("test").remove()

console.log(getById.innerHTML);

var name = "sahana";
getById.innerHTML = "<p>Welcome to "+name +" </p>";