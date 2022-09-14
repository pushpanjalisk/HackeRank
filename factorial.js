
var num1 = 8;
var num2 = 4;
var array = [1,2,32,4,5,22];

var addition = (num1,num2) => (num1+num2);
var checkEvenOdd = (num) => (num%2 == 0) ? " an Even Number" : " a Odd Number";

var sum = (arr) => arr.reduce(getSum,0);

function getSum(total,num){
    return total += num;
}

console.log("Array : " + array);
console.log("Sum of all array elements is :" + sum(array));

var max = array.reduce( ((m,num) => (num > m) ? num : m),0);
console.log("Max number in array is :" + max);

var factorial = (num) => {
    var result = 1;
    for (let i = 1; i <= num; i++)
        result *= i;
    return result;
};
console.log("Factorial of " + num1 + " is :" + factorial(num1));

console.log("Number " + num1 + " is : " + checkEvenOdd(num1));

console.log("Addition of " + num1 + " & " + num2 + " is :" + addition(num1,num2));
