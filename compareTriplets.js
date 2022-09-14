function compareTriplets(a, b) {
    var score = new Array(2);
    score.fill(0);

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i])
            score[0] += 1;
        else if (a[i] < b[i])
            score[1] += 1;
    }
    return score;
}

var a = [17, 28, 30];
var b = [99, 16, 8];

var result = compareTriplets(a, b);
console.log(result);