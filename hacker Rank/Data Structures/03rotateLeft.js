function rotateLeft(d, arr) {
   var repeat = d
   if (arr.length <= d) {
      repeat = d - arr.length
   }
   for (let i = 0; i < repeat; i++) {
      var a0 = arr.splice(0,1)
      arr.push(a0[0])
   }
   return arr
}
var d = 4
var ar = [1,2,3,4,5]
console.log(rotateLeft(d, ar))