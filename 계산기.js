const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    divide: function (a, b) {
        return a / b;
    },
    times: function (a, b) {
        return a * b;
    },
    power: function (a, b) {
        return a ** b;
    }
};

// calculator.plus(2,3);
// calculator.minus(2,3);
// calculator.divide(2,3);
// calculator.times(2,3);
// calculator.power(2,3);

const plusReult = calculator.plus(2,3);
const minusResult = calculator.minus(plusReult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusReult);
const powerResult = calculator.power(divideResult, minusResult);

console.log(plusReult);
