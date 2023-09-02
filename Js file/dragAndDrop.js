function dragStartHandler(event) {
  event.dataTransfer.setData("text/plain", event.currentTarget.id);
}

function dragOverHandler(event) {
  event.preventDefault();
}

function dropHandler(event) {
  var x = event.dataTransfer.getData("text/plain");
  console.log(x);
  event.currentTarget.appendChild(document.getElementById(x));
}

function dragstart() {
  obj = event.target;
  event.dataTransfer.setData("text/plain", event.target.textContent);
  event.dataTransfer.setData("text/data-marks", event.target.dataset.marks);
}
function dragover(event) {
  event.preventDefault();
}
function drop() {
  var name = event.dataTransfer.getData("text/plain");
  var marks = event.dataTransfer.getData("text/data-marks");
  // console.log(obj);
  // var x = event.currentTarget.id;
  if (event.currentTarget.id == "d1") {
    event.currentTarget.innerHTML += "<br>" + name;
    console.log(name);
  } else if (event.currentTarget.id == "d2") {
    event.currentTarget.innerHTML += "<br>" + marks;
    console.log(marks);
  }
  obj.parentNode.removeChild(obj);
}
