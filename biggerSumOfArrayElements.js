function simpleArraySum(ar) {
    var result = 0;

    for (let i = 0; i < ar.length; i++) {
        result = BigInt(result) +  BigInt(ar[i]);
    }
    return result;
}

var array = [1001001,23421,3345632,43412311,5434234];
console.log(simpleArraySum(array));