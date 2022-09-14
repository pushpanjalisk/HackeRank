var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

var middleArray = ((array.length) % 2 == 0) ? ((array.length) / 2) : ((Math.floor((array.length) / 2)) + 1);
// var pendings = ((array.length) - middleArray);
var arrayLastIndex = (array.length-1);

for (let i = 0; i < middleArray; i++) {
    console.log(array[i]);
    if (arrayLastIndex > middleArray)
        console.log(arrayLastIndex + " - ");
    arrayLastIndex--;
    console.log();
}