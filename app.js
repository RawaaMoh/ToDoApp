let smthn = prompt("what do u want from the list?");

let todoItems = [];

function list() {
    for (let i = 0; i < arr.length; i++) {
        if (smthn == "new") {
            newItem();
        }
        else if (smthn == "list") {
            listItem();
        }
        else if (smthn == "delete") {
            deleteItem();
        }
        else if (smthn == "quit") {
            quitApp();
        }
    }
}

function newItem(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now(),
    };

    todoItems.push(todo);
    console.log(todoItems);
}


function listItem(item) {
    let arr = [];
    for (let i = 0; i < arr.length; i++) {

    }
}

function deleteItem(item) {
    for (let i = 0; i < arr.length; i++) {
        
    }
}

function quitApp(item) {
    for (let i = 0; i < arr.length; i++) {

    }
}