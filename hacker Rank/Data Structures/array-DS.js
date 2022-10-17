function reverseArray(a) {
   var r = []
   for (let i = 1; i < a.length+1; i++) {
      r.push(a[a.length - i])
   }
   console.log(r)
}
reverseArray([1,2,3,5])