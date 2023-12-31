// Array for storing data i.e. Books
var books = [
  { category: "history", name: "Mrutyunjay", price: 100 },
  { category: "comic", name: "Chotu", price: 80 },
  { category: "history", name: "Pawankhind", price: 200 },
  { category: "comic", name: "Chandoba", price: 300 },
  { category: "history", name: "Khosla", price: 500 },
  { category: "comic", name: "Chintu", price: 400 },
];
var div = document.getElementById("div");
var div2 = document.getElementById("div2"); //Div that shows the bill
var category = []; // Second array for storing the duplicate category from books array
funDuplicate();
// Function for remove the duplicates from an array
function funDuplicate() {
  for (i = 0; i < books.length; i++) {
    //this loop for array of books
    for (j = i + 1; j < books.length; j++) {
      // this loop for array of category and it will start from i+1
      if (books[i].category == books[j].category) {
        // if bothe arrays has same category then
        count = books[i].category; // it will store duplicate category in count variable
        category[j] = -1; // and aaray of category will be starts from -1
      }
    }
    if (category[i] != -1) {
      // after above loop if array of category is not start from -1 then
      category[i] = count; // array of category will start from caount that we store in above loop
    }
    console.log(category); // this is for check if category is correct or not
  }
}
// Load the category in dropdown list
var str = "<option>select</option>"; // in this str variable we store the option tag for select tag that is avilable in HTML
var sel = document.getElementById("sel"); // store select tag in sel variable using its id
sel.addEventListener("change", selectCategory, false); // add listner on select tag
for (i = 0; i < category.length; i++) {
  // loop for add category in drop downlist
  if (category[i] != -1) {
    // it will take value from array of category if array of category is staring from -1
    str += "<option>" + category[i] + "</option>"; // it will store the category index in str
  }
  console.log(str); // for checking str
}
sel.innerHTML = str; // it will add str in  select tag

// Function for load the books in checkbox category wise
function selectCategory() {
  var bookCategory = sel.value; // it will stre the value of select tag
  console.log(bookCategory); // for checking what is inside the bookCategory variable
  var str1 = " "; // initialize str1 string vaiable for storing the data of array data that will apper when we click on drop downlist
  for (k = 0; k < books.length; k++) {
    // loop for getting all categories of array of category
    if (books[k].category == bookCategory) {
      // if books category and category we store in booksCategory matched then below line will excute
      str1 +=
        "<input type = checkbox onchange=funCheck() value=" +
        books[k].price +
        ">" +
        books[k].name +
        "<br>"; // for storing data in str1 of books name and price
    }
  }
  div.innerHTML = str1; // for showing the data that available in str1 in div
}

// function for collect the checked checkbox data
function funCheck() {
  var arr = document.querySelectorAll("input[type=checkbox]"); // for targeting tha checkbox and storing it in array beacuse no of string/data
  var bill = 0; // itinilazing bill variable for storing the price of books
  for (i = 0; i < arr.length; i++) {
    // loop for checking the checkbox
    if (arr[i].checked) {
      // condition for if checkbox is checked
      bill += parseInt(arr[i].value); // if yes then it will its value that is price and convert it in integer
    }
  }
  div2.innerHTML = "Total Bill:" + bill; // for showing data that store in bill to print in div2 tag
}
