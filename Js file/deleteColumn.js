var tbl = document.getElementById("tbl");
tbl.addEventListener("click", funClick, false);
var index;
function funClick(event) {
  var x = event.target.textContent;
  console.log("x"+x);
  var tr = event.target.parentNode;
  console.log(tr);
  var arr = tr.getElementsByTagName("td");
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      index = i;
    }
  }
  console.log(arr);
}
