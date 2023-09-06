var div = document.querySelector("div");
var tbl = document.getElementById("tbl");
var id = document.getElementById("id").value;

function funClick() {
  var obj = new XMLHttpRequest();
  obj.open("get","https://api.onlinewebtutorblog.com/employees/",true);
  obj.send();
  var arr = [];
  obj.onreadystatechange = function () {
    if (obj.readyState == 4 && obj.status == 200) {
      var result = JSON.parse(obj.responseText);
      // console.log(result);
      arr = result.data;
      display(arr);
    }
  }
}
function display(arr){
  var str = " ";
  
  for (i = 0; i < arr.length; i++){
    str += "<tr><td>"+arr[i].id+"</td><td>"+arr[i].username+"</td><td>"+arr[i].email+"</td><td>"+ arr[i].designation+"</tr>";
  }
  console.log(arr);
  tbl.innerHTML += str; 
}

function funInsert(){
  var data = JSON.stringify({
    username : "test",
    name : "test",
    email : "test@gmail.com",
    gender : "male",
    designation : "test",
    phone_number : "12346",
    complete_adderss : "test"
  });
  // console.log(data);
  var obj = new XMLHttpRequest();
  obj.open("post","https://api.onlinewebtutorblog.com/employees/",true);
  obj.send(data);
  // console.log(obj);
  obj.onreadystatechange = function(){
    // console.log(obj);
    if (obj.readyState == 4 && obj.readyState == 200){
      var result = JSON.parse(obj.responseText);
      console.log(result);
      console.log(obj);
      console.log(data);
    }
    else{
      console.log("NA");
    }
  }
}