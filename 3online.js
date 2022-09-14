function dynamicArray(n, query) {
    let lastAnswer = 0;
    let arr = [];
    let answers = [];

    queries.forEach(query => {
        let idx;
        if (query[0] == 1) {
            idx = queryMath(query[1], lastAnswer, n);
            if (!(arr[idx] instanceof Array)) {
                arr[idx] = [];
            }
            arr[idx].push(query[2]);
        } else {
            idx = queryMath(query[1], lastAnswer, n);
            let it = query[2] % arr[idx].length;
            lastAnswer = arr[idx][it];
            console.log(lastAnswer);
            answers.push(lastAnswer);
        }
    })
    return answers;
}

function queryMath(x, lastAnswer, n) {
    return ((x ^ lastAnswer) % n);
}


var n = 2;
var queries = [[1, 0, 5], [1, 1, 7], [1, 0, 3], [2, 1, 0], [2, 1, 1]];

console.log(dynamicArray(n, queries));
