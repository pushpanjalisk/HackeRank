// Write a Program to :- 
// 1. Create a Stack.
// 2. Retrive an element from the Middle of the Stack (always last element will be accessed First; and get deleted)



function getMaxFromStack(stackName) { // Printing array elements using Retrive-Function
    var max = stackName[0];
    for (let i = 0; i < stackName.length; i++){
        max = (stackName[i] > max) ?stackName[i]  : max;
    }
    return max;
}

var operations = new Array(10);
// operations = [[1, 97], [2], [1, 20], [2], [1, 26], [1, 20], [2], [3], [1, 91], [3]];
operations = ['1 97', '2', '1 20', '2', '1 26', '1 20', '2', '3', '1 91','3' ,'1 55', '3'];
var stackArray = [];
var varResult = [];
var resultIndex = 0;

for (let i = 0; i < operations.length; i++) {
    var string = operations[i];

    if (string.match('1*') == true) {
        var valueIndex = (string.indexOf(" ") + 1);
        var value = string.substring(valueIndex, string.length);
        // addElementToStack(stackArray, parseInt(value));
        stackArray.push(parseInt(value));
        
    } else if (string == '2')
        stackArray.pop();
    else if (string == '3') {
        console.log(stackArray);
        varResult[resultIndex] = getMaxFromStack(stackArray);
        resultIndex++;
        console.log("max : " + varResult);
    }
}

console.log(varResult);
