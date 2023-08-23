var tbl = document.getElementById("tbl");
function funAdd() {
  // For first row
  // Create element is function to create the html tag using js
  var txtName = document.getElementById("txtName").value;
  var r1 = document.createElement("tr");
  var td = document.createElement("td");
  var txt = document.createTextNode(txtName);
  console.log(txtName);
  td.appendChild(txt);
  r1.appendChild(td);

  tbl.appendChild(r1);

  // For second row
  var td1 = document.createElement("td");
  var txt1 = document.createTextNode("Text");
  td1.appendChild(txt1);
  r1.appendChild(td1);
  tbl.appendChild(r1);
}
