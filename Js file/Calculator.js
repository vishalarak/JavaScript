 //  Addition function for addition button

 function Addition() {             
    var n1 = document.getElementById("num1txt").value;
    var n2 = document.getElementById("num2txt").value;
    var result = parseInt(n1) + parseInt(n2);
    document.getElementById("resulttxt").value = result;
}

// Subtraction function for Subtraction button 

function Subtraction() {
    var n1 = document.getElementById("num1txt").value;
    var n2 = document.getElementById("num2txt").value;
    var result = (n1) - (n2);
    document.getElementById("resulttxt").value = result;   
}

// Multiplecation function for Multiplecation button

function Multiplecation() {
    var n1 = document.getElementById("num1txt").value;
    var n2 = document.getElementById("num2txt").value;
    var result = (n1) * (n2);
    document.getElementById("resulttxt").value = result;   
}
