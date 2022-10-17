function getMoneySpent(keyboards, drives, b) {
   var r = -1
   for (let i = 0; i < keyboards.length; i++) {
      for (let j = 0; j < drives.length; j++) {
         var s = keyboards[i]+drives[j]
         if (s<=b && s>r) {
            r = s
         }
      }      
   }
   return r
}

var k = [3,1] 
var d = [5,2,8]
var b = 10

console.log(getMoneySpent(k,d,b))