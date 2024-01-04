const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteToDo(event) {
    const li = event.target.parentElement;
    // console.log(li.id);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));

    saveToDos();

    // console.log(event.target.parentElement);

}

function paintToDo(newTodo) {
    // console.log("paint", newTodo);
    
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    span.innerText = newTodo.text;
    
    const button = document.createElement("button");
    button.innerText = "Click";

    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    // console.log(li);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // console.log(toDoInput.value);

    const newTodo = toDoInput.value;

    toDoInput.value = "";  // 빈값으로 초기화

    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//     console.log("this is the trun of ", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
 
    const parsedToDos = JSON.parse(savedToDos);

    toDos = parsedToDos;

    console.log(parsedToDos);
    // parsedToDos.forEach(sayHello);
    // parsedToDos.forEach((item) => console.log("this is the trun of", item));  // function을 간략하게 나타냄

    parsedToDos.forEach(paintToDo);
}

function Filter(todo) {
    return todo.id !== todo.id;
}