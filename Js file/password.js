var d1=document.getElementById("d1");
   // Main function that will call on button click
    function funCheck(){
        // storing user input in one variable
        var txtStr=document.getElementById("txtStr").value;
        // storing functions result in one variable to check true or false 
        var res=checkPassword(txtStr);

        // if result is true then return strong otherwise poor
        if(res==true){
            d1.innerHTML="<b>Valid and strong password</b>";
        }
        else{
            d1.innerHTML="<b>Poor Password!!";
        }
    }
    // function for checking all functions results are true or not 
    function checkPassword(str){
        if(checkLen(str)==true && checkUpperCount(str)==true && checkDigitCount(str)==true && checkSpSymCount(str)==true){
            return true;
        }
        else{
            return false;
        }
    }
    // function for checking length of password
    function checkLen(str){
        var len=str.length;
        if(len>=8){
            console.log("len==true");
            return true;
        }
        else{
            return false;
        }
    }
    // function for checking one upper case in password
    function checkUpperCount(str){

        var count=0;
        for(i=0;i<str.length;i++){
            if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=91){  // use character code for checking the charater is upper or lower
                count++;   // more than one found then store it in one variable
            }
        }
        // if count is 1 then return true otherwise false (for our password condition)
        if(count==1){
            console.log("upper ==true");
            return true;
        }
        else{
            return false;
        }

    }
    //function for chrcking one digit in password
    function checkDigitCount(str){
        var count=0;
        for(i=0;i<str.length;i++){
            if(str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57){  // use char code to check char is digit or not (every char has its unique code)
                count++;
            }
        }
        // if count is 1 then print true otherwise flase (as per our password condition)
        if(count==1){
            console.log("digit==true");
            return true;
        }
        else{
            return false;
        }

    }
    // function for checking special symbol
    function checkSpSymCount(str){
       
        var count=0;
        for(i=0;i<str.length;i++){
            // checking every special symbol one by one if found return true otherwise false
            if(str.charAt(i)=='!' || str.charAt(i)=='@' || str.charAt(i)=='#' || str.charAt(i)=='$' || str.charAt(i)=='%' || str.charAt(i)=='&' || str.charAt(i)=='*'){
                count++;
            }
        }
        // if special symbol and its only one then return true otherwise false
        if(count==1){
            console.log("sp sym==true");
            return true;
        }
        else{
            return false;
        }

    }