var sub = [
  { subId: 1, subName: "history" },
  { subId: 2, subName: "science" },
  { subId: 3, subName: "comic" },
  { subId: 4, subName: "biography" },
];

var arr = [
  { subId: 1, name: "Pawankhind", price: 100, copies: 10 },
  { subId: 1, name: "Khosla", price: 200, copies: 0 },
  { subId: 2, name: "StarJournal", price: 500, copies: 9 },
  { subId: 2, name: "Robotics", price: 400, copies: 11 },
  { subId: 1, name: "Swami", price: 100, copies: 9 },
];
var str = "<option>select</option>";
for (i = 0; i < sub.length; i++) {
  str += "<option value=" + sub[i].subId + ">" + sub[i].subName + "</option>";
}
document.getElementById("container").innerHTML = "<select>" + str + "</select>";
var tbl1 = document.getElementById("tbl1");
function funView() {
  var opId = document.querySelector("#container select").value;
  var str1 =
    "<tr><td>Name</td><td>Price</td><td>Available Copies</td><td>Status</td></tr>";
  for (i = 0; i < arr.length; i++) {
    var msg = "";
    var st = "";
    if (arr[i].subId == opId) {
      var x = arr[i].copies;
      if (x >= 10) {
        msg = "Sufficient";
        st = "background-color:green;color:white";
      } else if (x == 0) {
        msg = "out of stock!!";
        st = "background-color:orange;color:white";
      } else {
        msg = "Place An Order..";
        st = "background-color:red;color:white";
      }
      str1 +=
        "<tr><td>" +
        arr[i].name +
        "</td><td>" +
        arr[i].price +
        "</td><td>" +
        arr[i].copies +
        "</td><td style=" +
        st +
        ">" +
        msg +
        "</td></tr>";
    }
  }
  tbl1.innerHTML = str1;
}
function funAdd() {
  txtName = document.getElementById("txtName").value;
  txtPrice = document.getElementById("txtPrice").value;
  txtCopies = document.getElementById("txtCopies").value;
  opId = document.querySelector("#container select").value;

  obj = { subId: opId, name: txtName, price: txtPrice, copies: txtCopies };
  console.log(obj);
  arr.push(obj);
  funView();
}
function funApi() {
  alert("");
}
