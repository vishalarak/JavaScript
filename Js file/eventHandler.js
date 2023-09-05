// taking reference of button to acess.
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

// DOM Level 0 
// Adding event on button
// btn1.onclick = funAttached;
// btn2.onclick = funRemove;


// DOM Level 2
// Adding event on button
btn1.addEventListener("click",funAttached,false);
btn2.addEventListener("click",funRemove,false);


// Cross-browser Utility
// Adding event on button
// EventUtil.addHandler(btn1,"click",funAttached);
// EventUtil.addHandler(btn2,"click",funRemove);


function funAttached(){
    //DOM Level 0
    window.alert("Event is Attached!!");
}

function funRemove(){
    // DOM Level 0
    // for removing the handler
    // btn1.onclick=null;

    // Dom Level 2
    // for removing the handler
    btn1.removeEventListener("click",funAttached,false);

    // Cross-browser
    // for removing the handler
    // EventUtil.removeHandler(btn1,"click",funAttached);
    window.alert("Event is removed!!")
}


// Script for type attribute
var btn3 = document.getElementById("btn3");
btn3.addEventListener("click",fun,false);
btn3.addEventListener("mouseover",fun,false);
btn3.addEventListener("mouseout",fun,false);

function fun(event){
    if (event.type == "mouseover"){
        btn3.style.backgroundColor = "grey";
    }
    else if (event.type == "mouseout"){
        btn3.style.backgroundColor = "red";
    }
    else if (event.type == "click"){
        window.alert("btn Click!!");
    }
}

// script for target attribute
var list = document.getElementById("list");
list.addEventListener("click",funColor,false)

function funColor(event){
    var x = event.target.textContent;
    document.bgColor = x;
}