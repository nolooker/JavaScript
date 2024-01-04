const clock = document.querySelector("h2#clock");

// clock.innerText = "lalala";

// interval '매번' 일어나야 하는 무언가


function sayHello() {
    console.log("Hello");
}

// sayHello();

// setTimeout(sayHello, 5000); // (function, ms)  시간이 지난 후에 발생
// setInterval(sayHello, 5000);  // (function, ms) 매 번 발생

function getClock() {  // 시간을 구하는 function
    const date = new Date();

    const hours = String(date.getHours()).padStart(2,"0");  // number를 String으로 변환 후 padStart
    const minutes = String(date.getMinutes()).padStart(2,"0");  // padStart (length, "")
    const seconds = String(date.getSeconds()).padStart(2,"0");  // 기존의 string보다 원하는 길이가 더 길때 사용

    clock.innerText = `${hours}:${minutes}:${seconds}`; // 시:분:초
}

getClock();  // load 되자마자 바로 나타나게 하기
setInterval(getClock, 1000); // 1000ms 있다가 발생

// Life is a series of building, testing, changing and iterating