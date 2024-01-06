const quotes = [
    {
        quote:"Tough times don't last. Tough people do.",
        krQuote:"고난은 언젠가 끝난다. 강한 사람만이 살아남는다.",
    },
    {
        quote:"Don't waste time on things you can't change.",
        krQuote:"바꿀 수 없는 일에 시간 쓰지 마라.",
    },
    {
        quote:"Dream big. Think big. Be big.",
        krQuote:"꿈을 크게 꾸어라. 큰 생각을 품어라. 큰 사람이 되어라.",
    },
    {
        quote:"Dream big and dare to fail!",
        krQuote:"대범하게 실패하라!",
    },
    {
        quote:"Never, ever second-guess yourself.",
        krQuote:"결코 자기 자신을 의심하지 마라.",
    },
    {
        quote:"I have never seen a 'part-time' super successful, high performance person.",
        krQuote:"자기 일에 모든 시간을 쏟아붓지 않으면서 대성공을 거두거나 뛰어난 실행력을 발휘한 사람을 나는 한 번도 본 적이 없다.",
    },
    {
        quote:"You won't always have all the answers. Only take seriously the advice of others whom you greatly respect.",
        krQuote:"당신이 언제나 모든 답을 알 수는 없다. 진짜로 존경하는 사람의 조언만 골라 들어라.",
    },
    {
        quote:"Become more disciplined. The pain of discipline hurts less than the pain of regret.",
        krQuote:"스스로에게 엄격해라. 훈련의 고통이 후회의 고통보다 낫다.",
    },
    {
        quote:"If you want things to change, first you have to change.",
        krQuote:"상황을 바꾸고 싶다면 먼저 자신이 바뀌어야 한다.",
    },
    {
        quote:"Ignorance is a steep hill with jagged rocks at the bottom.",
        krQuote:"무지는 가시밭이 펼쳐진 낭떠러지다.",
    }
];

const quote = document.querySelector("#quote span:first-child");
const krQuote = document.querySelector("#quote span:last-child");

// console.log(quotes[0]);

// console.log(Math.random() * 10);  // Math.random() => 0과 1 사이의 랜덤값인데 * 10을 하면 0 ~ 10 사이의 값을 구할 수 있다.

// Math.round();   // 반올림
// Math.ceil();    // 올림
// Math.floor();   // 내림

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
krQuote.innerText = todaysQuote.krQuote;