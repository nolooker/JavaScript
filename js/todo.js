const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();

    // console.log(event.target.parentElement);

}

function paintToDo(newTodo) {
    console.log("paint", newTodo);
    
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    
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
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
    console.log("hello", item);
}

const saveToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null) {
    const parsedToDos = JSON.parse(saveToDos);
    parsedToDos.forEach(sayHello);
}