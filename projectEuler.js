
var addition = (num1, num2) => (num1 + num2);
var sum = (arr) => arr.reduce((total, num) => total += num, 0);


var factorial = (num) => {
    var result = 1;
    for (let i = 1; i <= num; i++)
        result *= i;
    return result;
};

function getDigitsFactorial(num) {
    var factorialArray = [];
    var index = 0;
    while (num / 10 > 0) {
        factorialArray[index] = factorial(num % 10);
        num = Math.round(num / 10);
        index++;
    }
    return sum(factorialArray);
}

function getDigitSum(num) {
    var digits = [];
    var index = 0;
    
    while (num / 10 > 0) {
        digits[index] = (num % 10);
        num = Math.round(num / 10);
        index++;
    }
    return sum(digits);
}

var num = 25;
// var result = getDigitsFactorial(num);
console.log("Factorial of each digit of :" + num + " is :" + getDigitsFactorial(num));

console.log("Sum of the Factorial is :" + getDigitSum(getDigitsFactorial(num)));