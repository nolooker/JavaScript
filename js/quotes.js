const quotes = [
    {
        quote:"Why?1",
        author:"aassdd",
    },
    {
        quote:"Why?2",
        author:"aassdd",
    },
    {
        quote:"Why?3",
        author:"aassdd",
    },
    {
        quote:"Why?4",
        author:"aassdd",
    },
    {
        quote:"Why?5",
        author:"aassdd",
    },
    {
        quote:"Why?6",
        author:"aassdd",
    },
    {
        quote:"Why?7",
        author:"aassdd",
    },
    {
        quote:"Why?8",
        author:"aassdd",
    },
    {
        quote:"Why?9",
        author:"aassdd",
    },
    {
        quote:"Why?10",
        author:"aassdd",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// console.log(quotes[0]);

// console.log(Math.random() * 10);  // Math.random() => 0과 1 사이의 랜덤값인데 * 10을 하면 0 ~ 10 사이의 값을 구할 수 있다.

// Math.round();   // 반올림
// Math.ceil();    // 올림
// Math.floor();   // 내림

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;