function miniMaxSum(arr) {
   var maxValue = arr.reduce(function(prev, current) { 
      return prev > current ? prev : current; 
   });
   
   var minValue = arr.reduce(function(prev, current) { 
      return prev < current ? prev : current; 
   });

   var sum = 0
   for (let i in arr) {
      sum += arr[i]
   }
   var sumMax = sum - maxValue
   var sumMin = sum - minValue
 
   console.log(sumMax, sumMin)
}
var arr = [1,3,5,7,9]
miniMaxSum(arr)