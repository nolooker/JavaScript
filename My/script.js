const login = document.querySelector("#login");
const loginInput = document.querySelector("#login input");

const HIDDEN = 'hidden';

function onLoginClick(event) {
    
    event.preventDefault();
    console.dir(login);
    console.dir(loginInput);
    console.log("hello",loginInput.value);
    
}

login.addEventListener("submit", onLoginClick);