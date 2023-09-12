function Users(name, email, pass) {
  this.name = name;
  this.email = email;
  this.pass = pass;
}
function funSave() {
  var txtName = document.getElementById("txtName").value;
  var txtEmail = document.getElementById("txtEmail").value;
  var txtPass = document.getElementById("txtPass").value;
  var arr = [];
  var obj = new Users(txtName, txtEmail, txtPass);
  arr.push(obj);
  console.log(arr);
  var arrObj = JSON.stringify(arr);
  localStorage.setItem("UserRecords", arrObj);
}

var loginAttempts = 3;

function funLogin() {
  var Rec = JSON.parse(localStorage.getItem("UserRecords"));
  console.log(Rec);
  var UserName = document.getElementById("txtUserName").value;
  var pass = document.getElementById("txtUserPass").value;
  for (i = 0; i < Rec.length; i++) {
    if (Rec[i].name == UserName && Rec[i].pass == pass) {
      alert("Login successfull!!");
    } else {
      loginAttempts--;
      if (loginAttempts > 0) {
        alert("Login Failed!!!");
      } else {
        alert("Login attempts exhusted!!");
        var btnLogin = document.getElementById("btnLogin");
        btnLogin.disabled = true;
      }
    }
    funCealr();
  }
}

function funCealr(){
    document.getElementById("txtUserName").value = "";
    document.getElementById("txtUserPass").value = "";
}