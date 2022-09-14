function simpleArraySum(ar) {
    var result = 0;

    for (let i = 0; i < ar.length; i++) {
        result += ar[i];
    }
    return result;
}

var array = [1,2,3,4,5];

console.log( "Sum using for loop : " + simpleArraySum(array));

console.log( "Sum using array,reduce Method : " + array.reduce(((sum,num) => sum+=num),0));