var div = document.querySelector("div");

        // literal string
        var str = "Hello Wolrd!";
        var a = typeof(str);
        div.innerHTML += "Type = " + a;
        div.innerHTML += "<br>" + str +"<br>";
        
        //String object
        var obj = new String ("Hello Wolrd!");
        var b = typeof(obj);
        div.innerHTML += "<br> Type = " + b
        div.innerHTML += "<br>" + obj + "<br>";
        

        div.innerHTML += "<br> Value of both string and object are same and for that it will print true <br>"
        div.innerHTML += (str == obj);
        

        // in this we add in string object new key as color and assign a element as red
        obj.color = "red";
        div.innerHTML +="<br>"+ obj.color;
        document.write("<hr>");

        // to make hole string in uppercase
        document.write("<br> to make uppercase toUpperCase() = " + str.toUpperCase());
        document.write("<br> Object = " + obj.toUpperCase());
        document.write("<hr>");
        

        // to make hole string in lower case
        document.write("<br> To make lower case toLowerCase() = " + str.toLowerCase());
        document.write("<br> Object = " + obj.toLowerCase());
        document.write("<hr>");

        // to print the index of character
        document.write("<br> to print the index of character indexOf() = " + str.indexOf("W"));
        document.write("<br> object = " + obj.indexOf("W"));
        document.write("<hr>");

        // to print the character using index number 
        document.write("<br> to print the charater at index of " + str.charAt(4));
        document.write("<br> Object = " + obj.charAt(4));
        document.write("<hr>");

        // to print the length of string
        document.write("<br> to print the length of string = " + str.length);
        document.write("<br> For Object = " + obj.length);
        document.write("<hr>");

        // to print subString it will print after string the index that we provide as parameter
        document.write("<br> ro print subString of main String = " + str.substring(5));
        document.write("<br> For Object = " + obj.substring(5));
        document.write("<hr>");

        // it will print only between characters as parameter we provide
        document.write("<br> to print string between as we provide parameter = " + str.substring(1,8));
        document.write("<br> For Object = " + obj.substring(1,8));
        document.write("<hr>");

        // it will print a string except those charachers that we provide as parameter
        document.write("<br> to print string without charachters that we provide as parameter = " + str.split("llo"));
        document.write("<br> For Object = " + obj.split("llo"));
        document.write("<hr>");