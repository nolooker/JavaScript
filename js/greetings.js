const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    // console.dir(loginInput);
    // console.log("Hello",loginInput.value);
    // console.log("click!!!");

    event.preventDefault();  // html submit 시 새로고침 되는 브라우저 새로 고침을 막는다. 쉽게말해 브라우저 기본동작을 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);  // form을 숨김
    const username = loginInput.value;  // input username 변수에 저장
    localStorage.setItem(USERNAME_KEY, username);   // localStorage.setItem에 username의 값을 username이라는 key와 함께 저장
    
    // greeting.innerText = "Hello " + username;
    // greeting.innerText = `Hello ${username}`;
    // console.log(username);
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    
    paintGreetings(username);  // paintGreetings 함수 호출 username 하나의 인자를 받는다.

}

function handleLinkClick(event) {
    // event.preventDefault();
    console.log(event);
    alert("clicked");
}

link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

function paintGreetings(username) {
    // const username = localStorage.getItem(USERNAME_KEY);

    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    // show the greetings

    // greeting.innerText = `Hello ${savedUsername}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);

    paintGreetings(savedUsername);
    
}