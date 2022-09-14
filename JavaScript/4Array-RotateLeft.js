

function moveFirstElementToLastPlace(array) {
    var arrayLastIndex = (array.length - 1);


    for (let i=0; i <= arrayLastIndex;  i++) {
        if (i == 0) {
            var tempNum = array[0];
            array[i] = array[i+ 1];
        }
        else if (i == arrayLastIndex) {
            array[i] = tempNum;
        } else
            array[i] = array[i + 1];
    }
    return array;
}

function rotateArray(arr,d) {
    for (let rotateCount = 0; rotateCount < d; rotateCount++) {
        var result = (moveFirstElementToLastPlace(arr));
    }
    return result;
}

// var arrayNum = [3, 1, 2, 5, 7];
// var rotateNum = 2;
// console.log("Original Array : " + arrayNum);
// rotateArray(arrayNum, rotateNum);
// console.log("Rotating elemnts by : " + rotateNum);
console.log("Output :" + arrayNum);

console.log();
var arrayNum = [1, 2, 3, 4, 5];
rotateNum = 4;
console.log("Original Array : " + arrayNum);
var varReuslt = rotateArray(arrayNum, rotateNum);
console.log("Rotating elemnts by : " + rotateNum);
console.log("Output :" + varReuslt);