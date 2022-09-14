// Given a [6x6] 2D Array, arr - 
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
//  sample output : 7

var arrNum = [[1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [0, 0, 2, 4, 4, 0], [0, 0, 0, 2, 0, 0], [0, 0, 1, 2, 4, 0]];

var arrNum1 = [[ 0, -4, -6, 0, -7, -6],[-1, -2, -6, -8, -3, -1], [-8, -4, -2, -8, -8, -6],[-3 -1, -2, -5, -7, -4],[-3, -5, -3, -6, -6, -6],[-3, -6, 0, -8, -6, -7]];

var arrNum2 = [[-1, -1, 0, -9, -2, -2],[-2, -1, -6, -8, -2, -5],[-1, -1, -1, -2, -3, -4],[-1, -9, -2, -4, -4, -5],[-7, -3, -3, -2, -9, -9],[-1, -3, -1, -2, -4, -5]];

// for (let i = 0; i < arr.length; i++) {
//     var strArray = "";
//     var tempArray = arr[i];
//     for (j = 0; j < tempArray.length; j++) {
//         strArray = strArray + (tempArray[j]) + " ";
//     }
//     console.log(strArray);
//     console.log();
// }

function hourglassSum(arr) {
    var vIndex = 0;
    var hIndex = 0;
    var maxSum;
    var sum = [16];
    var sumIndex = 0;

    for (let i = 0; i <= 3; i++) {
        maxSum = hourglass(arr, i, 0);
        for (let j = 0; j <= 3; j++) {
            sum[sumIndex] = hourglass(arr, i, j);;
            // console.log("Total Sum = " + sum[sumIndex]);
            sumIndex++;
        }
    }
    maxSum = sum[0];
    for(let i =0; i<sum.length; i++)
        maxSum = (sum[i] > maxSum) ? sum[i] : maxSum;
    
    return maxSum;
}

function hourglass(arr, vIndex, hIndex) {
    var sum = 0;
    for (let i = vIndex; i < (vIndex + 3); i++) {
        var tempArray = arr[i];
        var strHourGlassArray = "";
        if (i == (vIndex + 1)) {
            sum += tempArray[hIndex + 1];
            strHourGlassArray += "  " + tempArray[hIndex + 1];
        } else {
            for (let j = hIndex; j < (hIndex + 3); j++) {
                sum += tempArray[j];
                // strHourGlassArray += tempArray[j] + " ";            
            }

        }
        // console.log(strHourGlassArray);
    }
    return sum;
}

console.log("Maximum Sum : " + hourglassSum(arrNum2));