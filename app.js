let option = prompt("what do u want from the list?");

let todoItems = [];

const text = input.value.trim();
if (text !== '') {
  addTodo(text);
  input.value = '';
  input.focus();
}

// function list() {

// for (let i = 0; i < arr.length; i++) {

if (option == "new") {

  function addTodo(text) {
    const todo = {
      text,
      checked: false,
    };

    todoItems.push(todo);

  }

} //new

else if (option == "list") {

  function listItem(text) {

    for (let i = 0; i < todoItems.length; i++) {

    }
  }

}//list

else if (option == "delete") {

  function deleteItem(text) {
    for (let i = 0; i < todoItems.length; i++) {

    }
  }

} //delete

else if (option == "quit") {

  function quitApp(text) {
    for (let i = 0; i < todoItems.length; i++) {

    }
  }

} //quit

// } //for(i) loop

// } //list function

