function fun() {
    var num1 = document.getElementById("num1").value;

    if (num1 > 0) {
        window.alert("Entered number is Positive");
    } else {
        window.alert("Entered number is negative");
    }
}

function fun1() {
    var text1 = document.getElementById("txt1").value;

    if (text1 == "a") {
        window.alert("Entered alphabet is vowel!");
    }
    else if (text1 == "e") {
        window.alert("Entered alphabet is vowel!");
    }
    else if (text1 == "i") {
        window.alert("Entered alphabet is vowel!");
    }
    else if (text1 == "o") {
        window.alert("Entered alphabet is vowel!");
    }
    else if (text1 == "u") {
        window.alert("Entered alphabet is vowel!");
    }
    else {
        window.alert("Entered aplphabet is not vowel!")
    }
}

function fun2() {
    var text2 = document.getElementById("txt2").value;

    switch (text2) {
        case "a": window.alert("Enter alphabet is not constant!");
        case "e": window.alert("Enter alphabet is not constant!");
        case "i": window.alert("Enter alphabet is not constant!");
        case "o": window.alert("Enter alphabet is not constant!");
        case "u": window.alert("Enter alphabet is not constant!");
        
        default: window.alert("Enter alphabet is constant!");
    }
}

function Func() {
    var name = document.getElementById("nametxt").value;
    var htmlmark = parseInt(document.getElementById("htmltxt").value);
    var cssmark = parseInt(document.getElementById("csstxt").value);
    var jsmark = parseInt(document.getElementById("jstxt").value);
    var batch = document.getElementById("batchtxt").value;
    var sum = ((htmlmark+cssmark+jsmark) / 300);
    var per = sum * 100 ;
    
    var result = "";

    if (per > 35) {
        result = "Pass";
    } else {
        result = "Fail";
    }
    // if else for grade
    var grade = "";
    if (per >= 75) {
        grade = "First Class";
    } else if (per >= 60 && per < 75) {
        grade = "Second Class";
    } else if (per >= 35 && per < 60) {
        grade = "Average";
    }
    // for showing data in table format
    var str = "";
    str = "<tr><td>"+name+"</td><td>"+htmlmark+"</td><td>"+cssmark+"</td><td>"+jsmark+"</td><td>"+batch+"</td><td>"+result+"</td><td>"+per+"</td><td>"+grade+"</td></tr>";
    var table1 = document.getElementById("tbl1");
    table1.innerHTML += str;

    
   
    if (name == "" || htmlmark == "" || cssmark == "" || jsmark == "" || batch == "") {
        window.alert("Please insert the data!")
    }
    else {
         // This part olny for widow alert
        if (per > 35) {

            window.alert("Hi " + name + " Your batch is " + batch + " Congratulations you are Pass!");
            
        }

        else {

            window.alert("Hi " + name + " Your batch is " + batch + " you are not qualified this time!");
        
        }
    }
}