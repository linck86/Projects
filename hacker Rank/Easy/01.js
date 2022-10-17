function compareTriplets(a, b) {
   var r = [0, 0]
   for (var i in a){
       if(a[i] != b[i]){
           if(a[i] > b[i]){
               r[0] = r[0] + 1
           }else{
               r[1] = r[1] + 1
           }
       }
   }
   return r
}

var a = [5, 6, 7],
b = [3, 6, 10]

console.log(compareTriplets(a, b)) //[1, 1]