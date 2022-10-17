function hourglassSum(arr) {
   var r
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
         if (j<4 && i <4) {
            var s = (arr[i][j]) + (arr[i][j+1]) + (arr[i][j+2]) + (arr[i+1][j+1]) + (arr[i+2][j]) + (arr[i+2][j+1]) + (arr[i+2][j+2])
            if (typeof r == 'undefined' ) {
               r = s
            }
            if (s > r) {
               r = s
            }
         }
      }      
   }
   return r
}
//        00 01 02 03 04 05   10 11 12 13 14 15   20 21 22 23 24 25
// var ar =[[1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [0, 0, 2, 4, 4, 0], [0, 0, 0, 2, 0, 0], [0, 0, 1, 2, 4, 0]]
var ar =[[0, -4, -6, 0, -7, -6], [-1, -2, -6, -8, -3, -1], [-8, -4, -2, -8, -8, -6], [-3, -1, -2, -5, -7, -4], [-3, -5, -3, -6, -6, -6], [-3, -6, 0, -8, -6, -7]]
console.log(hourglassSum(ar))