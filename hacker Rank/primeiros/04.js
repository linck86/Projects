function aVeryBigSum(ar) {
   ar.shift()
   console.log(ar)
   var s = 0
   for(i in ar){
      s += ar[i]
   }
   return s
}

var ar = [5,1000000001,1000000002,1000000003,1000000004,1000000005]
console.log(aVeryBigSum(ar))