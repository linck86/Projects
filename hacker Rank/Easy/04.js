function plusMinus(arr) {
   var r = [],
   nega = 0,
   posi = 0,
   zero = 0
   for(var i in arr){
      if (arr[i] > 0) {
         posi++
      }else if (arr[i] < 0){
         nega++
      }else{
         zero++
      }
   }
   r.push((posi/arr.length).toFixed(6))
   r.push((nega/arr.length).toFixed(6))
   r.push((zero/arr.length).toFixed(6))
   return r
}
var arr = [-4, 3, -9, 0, 4, 1]
console.log(plusMinus(arr))