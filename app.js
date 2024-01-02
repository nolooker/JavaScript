const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    // console.dir(loginInput);
    // console.log("Hello",loginInput.value);
    // console.log("click!!!");

    event.preventDefault();  // html submit 시 새로고침 되는 브라우저 새로 고침을 막는다. 쉽게말해 브라우저 기본동작을 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;

    //greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`;
    console.log(username);
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
    alert("clicked");
}


loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
