var list = document.getElementById("list");
function funAdd() {
  var txtName = document.getElementById("txtName").value;
  var li = document.createElement("li");
  var txt = document.createTextNode(txtName);
  li.appendChild(txt);
  list.appendChild(li);
  funClear();
}

function funClear(){
    document.getElementById("txtName").value = "";
}
