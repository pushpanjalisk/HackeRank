// Array Manipulation :-
// Sample input1:-   n       =10;
//                  queries = [[1,5,3],[4,8,7],6,9,1];
// Create base outputArray[n];
// add value query[][a,b,k] to outputArray[n] as -
// outputArray[a] to outputArray[b] = original-value + k
// return the maxmum number from the outputArray

//       1 2 3  4  5 6 7 8 9 10
//      [0,0,0, 0, 0,0,0,0,0, 0] - create outputArray[n]
//      [3,3,3, 3, 3,0,0,0,0, 0] - run queries[0] = [1,5,3] =>  add k-3 to outputArray[a]:1 till outputArray[b]:5 
//      [3,3,3,10,10,7,7,7,0, 0]
//      [3,3,3,10,10,8,8,8,1, 0]

// Sample input2:   n=5;
//                  no. of queries=3;
//                  queries = [[1, 2, 100],[2, 5, 100],[3, 4, 100]];

function arrayManipulation(n, queries) {
    
    var outputArray = new Array(n).fill(0);

    for (const [startIndex, endIndex, num] of queries) {
        var index = startIndex;
        while (index <= endIndex) {
            outputArray[index - 1] += num;
            index++;
        }
        // console.log(outputArray);
    }

    var max = outputArray.reduce(((m, num) => (num > m) ? num : m), 0);
    return max;
}
var n = 5;
var queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];

var result = arrayManipulation(n, queries);
console.log(result);