var todos = [];


var input = prompt("What would you like to do?");

while (input !== "quit") {
  if (input === "list") {
    listIt();
  }
  else if (input ==="new") {
    addTodo();
  }
  else if (input ==="delete") {
    delTodo();
  }
  // asks for input again which starts up the loop again
  input = prompt("What would you like to do?");
}
console.log("Thanks for using the app");

function listAll(x, i) {
  console.log(i + ": " + x);
}

function listIt() {
  console.log("*******");
  todos.forEach(listAll);
  console.log("*******");
}

function addTodo() {
  var newTodo = prompt("Enter new todo:");
    // adds a new todo into the main todos array
    todos.push(newTodo);
    console.log("\"" + newTodo + "\"" + " has been added to Todo list.");
}

function delTodo() {
  var del = prompt("Enter index number of item to delete:");
    console.log("\"" + todos[del] + "\"" + " has been deleted");
    todos.splice(del, 1);
}