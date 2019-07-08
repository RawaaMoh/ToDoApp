let option = prompt("what do u want from the list?");

let todoItems = [];

const text = " ";

if (text !== '') {

  // function list() {

  // for (let i = 0; i < arr.length; i++) {

  if (option == "new") {

    function addTodo(text) {
      const todo = {
        text,
        // checked: false,
      };

      todoItems.push(todo);

    }

  } //new

  else if (option == "list") {

    function listItem(text) {

      for (let i = 0; i < todoItems.length; i++) {
        text = todoItems;

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

} // text condition  