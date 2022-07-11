// function welcome(){
//     alert("Hello, I'm an event");
// }

// var btn = document.getElementById("btn");

//btn.onclick = welcome;

// //event delegation
// element.addEventListener(eventname, event handler)

// btn.addEventListener("click", welcome);

var p1 = document.getElementById("parent");
var p2 = document.getElementById("parent1");
var c1 = document.getElementById("child");
var c2 = document.getElementById("child1");
var anc = document.getElementById("link");

function taskOne(e){
    console.log("task one")
    e.preventDefault()                       //Prevents from default execution
    // if(true){
    //     e.stopImmediatePropagation();
    // }
}

function taskTwo(){
    console.log("task two")
}

function parentHandler(ev){           
    console.log("This is parent")
    //-console.log(ev.target)              // check where user has clicked
    console.log(ev.currentTarget)       //shows where the event is attached
}

function childHandler(ev){                //ev object is created to stop child when parent is clicked
    console.log("This is child")
    ev.stopPropagation()
}

anc.addEventListener("click",taskOne);
// p1.onclick = parentHandler;
// c1.onclick = childHandler;
// p2.onclick = parentHandler;
// c2.onclick = childHandler;


p1.addEventListener("click",parentHandler);        //bottom to top (child to parent)
// c1.addEventListener("click",childHandler);

// p2.addEventListener("click",parentHandler,true);      // top to bottom (parent to child)
// c2.addEventListener("click",childHandler,true);

// p1.addEventListener("click",taskOne);        
// c1.addEventListener("click",taskTwo);
//event object 

// c1.addEventListener('click', childHandler)
// c1.addEventListener('click', taskOne)
// c1.addEventListener('click', taskTwo)