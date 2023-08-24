var arr = ["orange", "apple", "banana"];
      document.write("Array : "+arr+"<br>");
      document.write("<br>");
      document.write("toString will return a string : ");
      document.write("<br>toString = " + arr.toString()+"<br>");
    
      document.write("<br>length will return a array length : ");
      document.write("<br> length = " + arr.length+"<br>");

      document.write("<br>join will join array using @ (you can add anything you want to add array in quotation marks)");
      document.write("<br> Join = " + arr.join("@")+"<br>");

      document.write("<br>sort() will sort an array in alphabatical manner : ");
      document.write("<br> Sort = " + arr.sort()+"<br>");
    
      document.write("<br>reverse() will reverse the array : ");
      document.write("<br> Reverse = " + arr.reverse()+"<br>");

      document.write("<br>slice() will delete the elements from array till given parameter and return new array it will not wffect on original array");
      document.write("<br> Slice = " + arr.slice(1)+"<br>");

      document.write("<br>splice() will used to add and delete data from array using its parameter<br>");
      document.write("splice() will delete element from n possition till m position : "); 
      document.write("<br> Splice = " + arr.splice(1,1)+"<br>");

      document.write("splice() will add element after 1st possition");
      document.write("<br>using splice() insert data = " + arr.splice(1,0,"mango","pinaple"));
      document.write(arr+"<br>");

      document.write("<br>push() will add data array at last possition");
      document.write("<br> push() = " + arr.push("greps")+"<br>");

      document.write("<br>pop() will delete element at last possition");
      document.write("<br> pop() = " + arr.pop());

      console.log(arr);