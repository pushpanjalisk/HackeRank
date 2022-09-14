
// [1,2,3,4,5,6,7,8,9,10] -> 

// d 1-[2,3,4,5,6,7,8,9,10,1] -> 2-[3,4,5,6,7,8,9,10,1,2] -> 3-[4,5,6,7,8,9,10,1,2,3] -> 4-[5,6,7,8,9,10,1,2,3,4]
// Sample output - [5,6,7,8,9,10,1,2,3,4]


function rotateArray(d, arr) {
    var arrayLastIndex = (arr.length - 1);
    var appendIndex = arr.length - d;
    // console.log(appendIndex);
    var tempArray = [];
    var index = 0

    for (let i = 0; i <= arrayLastIndex; i++) {
        tempArray[i] = arr[i];
    }

    for (let i = 0; i <= arrayLastIndex; i++) {
        if (i < appendIndex) {
            arr[i] = arr[i + d];
        } else {
            arr[i] = tempArray[index];
            index++
        }
    }
    return arr;
}

// function rotateArray(arr,d) {
//     for (let rotateCount = 0; rotateCount < d; rotateCount++) {
//         var result = (moveFirstElementToLastPlace(arr));
//     }
//     return result;
// }

// var arrayNum = [3, 1, 2, 5, 7];
// var rotateNum = 2;
// console.log("Original Array : " + arrayNum);
// rotateArray(rotateNum, arrayNum);
// console.log("Rotating elemnts by : " + rotateNum);
console.log("Output :" + arrayNum);

console.log();
var arrayNum = [1, 2, 3, 4, 5];
rotateNum = 2;
// [1,2,3,4,5] -> 1-[2,3,4,5,1] -> 2-[3,4,5,1,2] -> 3-[4,5,1,2,3] -> 4-[5,1,2,3,4]
// Sample output - [5,1,2,3,4]
// console.log("Original Array : " + arrayNum);
var varReuslt = rotateArray(rotateNum, arrayNum);
// console.log("Rotating elemnts by : " + rotateNum);
console.log("Output :" + varReuslt);