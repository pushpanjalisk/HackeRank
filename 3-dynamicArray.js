
// last answer = 0; [initially]
// queries[][0] = query type
// queries[][1] = value of (x)
// queries[][2] = value of (y)

// query type 1 :   index = ((x ^ lastAnswer) % n)
//                  append y to arr[index]

// query type 2 :   index = ((x ^ lastAnswer) % n)
//                  lastAnswer = arr[index][y % (size(arr[index]))]
//                  print lastAnsweer 
function dynamicArray(n, queries) {
    var aLength = queries.length;

    var arr = [];
    var arrChildList = [];
    var arrIndex = 0;
    var arrChildIndex = 0;

    var lastAnswer = 0;
    var index = 0;

    var outputArr = [];
    var outputArrIndex = 0;

    for (let i = 0; i < aLength; i++) {
        var tempQuery = queries[i];

        if (tempQuery[0] == 1) {

            index = ( (tempQuery[1] ^ lastAnswer) % n);
            arrChildList = arr[index];
            arrChildIndex = arrChildList.length;
            arrChildList[arrChildIndex] = tempQuery[2];
            arr[index] = arrChildList;

        } else if (tempQuery[0] == 2) {
            index = ((tempQuery[1] ^ lastAnswer) % n);
            arrChildList = arr[index];
            arrChildIndex = ((tempQuery[2]) % (arr[index].length));
            lastAnswer = arrChildList[arrChildIndex];
            
            outputArr[outputArrIndex] = lastAnswer;
            outputArrIndex++;
        }
        else {
            console.log("Please enter valid Query type.");
        }
    }
    // console.log(arr);
    return outputArr;
}

var n = 2;
var queries = [[1, 0, 5], [1, 1, 7], [1, 0, 3], [2, 1, 0], [2, 1, 1]];

console.log(dynamicArray(n, queries));