function diagonalDifference(arr) {
   var d1 = 0
   var d2 = 0
   d1 = arr[0] + arr[4] + arr[8]
   d2 = arr[2] + arr[4] + arr[6]
   // d1 = arr[0][0] + arr[1][1] + arr[2][2]
   // d2 = arr[0][2] + arr[1][1] + arr[2][0]

   return Math.abs(d1 - d2)
}

for (let i = 0; i < array.length; i++) {
   
}

var arr;
arr[0] = 11;
arr[1] = 2;
arr[2] = 4;
arr[3] = 4;
arr[4] = 5;
arr[5] = 6;
arr[6] = 10;
arr[7] = 8;
arr[8] = -12;
console.log(diagonalDifference(arr))