// Program 1:
// Reverse an array of integers.
// Sample Input : [1, 4, 3, 2]
// Sample Output: [2, 3, 4, 1]

function reverseArray(a) {
    var aLength = a.length;
    var reverseIndex = (aLength - 1);
    var midArray = (aLength % 2 == 0) ? (aLength / 2) : (Math.floor(aLength / 2));

    var evenFlag = (aLength % 2 == 0) ? true : false;
    console.log(midArray);
    for (let i = 0; i < midArray; i++) {
        var temp = a[i];
        a[i] = a[reverseIndex];
        a[reverseIndex] = temp;
        console.log(a[i] + " = " + a[reverseIndex]);
        reverseIndex--;
    }

    return a;
}

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13, 14, 15,16, 17, 18,19,20];
console.log(reverseArray(a));