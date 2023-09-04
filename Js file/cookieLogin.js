function funCreate() {
  txtName = document.getElementById("txtName").value;
  txtPass = document.getElementById("txtPass").value;

  document.cookie = txtName + "=" + txtPass + ";expires=sat 10 sep 2023 0:0:0";
  window.alert("User Registered!!");
  console.log(txtName);
}

function funLogin() {
  function readCookieValue() {
    var userName = document.getElementById("userName").value;
    var userPass = document.getElementById("userPass").value;

    str = document.cookie;
    console.log(str);
    console.log("Toatl Cookies : " + str);
    arr = str.split(";");
    console.log(arr);
    console.log("Spliting array : " + arr);
    console.log(arr.length);
    console.log(arr);

    for (i = 0; i < arr.length; i++) {
      var str2 = arr[i];
      var arr2 = str2.split("=");
      arr2[0] = arr2[0].trim();
      var cookieName = arr2[0];
      var cookieValue = arr2[1];
      console.log(cookieName);
      console.log(cookieValue);
    }

    if (cookieName == userName && cookieValue == userPass) {
      alert("Login sucessful!");
    } else {
      alert("Login failed!");
    }
  }
  readCookieValue();
}
