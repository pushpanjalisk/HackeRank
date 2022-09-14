// Write a Program to :- 
// 1. Create a Stack.
// 2. Retrive an element from the Middle of the Stack (always last element will be accessed First; and get deleted)



function getMaxFromStack(stackName) { // Printing array elements using Retrive-Function
    var arrayTempStack = [];
    var varArrayLength = stackName.length;
    var elementNum = 0;
    var max = 0;

    for (let i = 0; i < varArrayLength; i++) {
        elementNum = retriveFromStack(stackName);
        max = (elementNum > max) ? elementNum : max;
        arrayTempStack[i] = elementNum;
    }

    for (let i = ((arrayTempStack.length) - 1); i >= 0; i--) {
        addElementToStack(stackName, arrayTempStack[i]);
    }
    return max;
}

function retriveFromStack(stackName) {
    var elementIndex = ((stackName.length) - 1);
    if (elementIndex < 0) {
        console.log("You've reached to the last index");
        return 0;
    } else {
        var elementNum = stackName[elementIndex];
        stackName.length = elementIndex;
        return elementNum;
    }
}

function addElementToStack(stackName, elementNum) {
    var elementIndex = (stackName.length);
    stackName[elementIndex] = elementNum;
    return stackName;
}

// console.log(getMax(stackArray));

var operations = new Array(10);
// operations = [[1, 97], [2], [1, 20], [2], [1, 26], [1, 20], [2], [3], [1, 91], [3]];
operations = ['1 97', '2', '1 20', '2', '1 26', '1 20', '2', '3', '1 91', '3'];
var stackArray = [];
var varResult = [];
var resultIndex = 0;

for (let i = 0; i < operations.length; i++) {
    var string = operations[i];

    if (string.match('1*') == true) {
        var valueIndex = (string.indexOf(" ") + 1);
        var value = string.substring(valueIndex, string.length);
        addElementToStack(stackArray, parseInt(value));
    } else if (string == '2')
        retriveFromStack(stackArray);

    else if (string == '3') {
        varResult[resultIndex] = getMaxFromStack(stackArray);
        resultIndex++;
    }
}

console.log(varResult);
