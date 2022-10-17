function matchingStrings(strings, queries) {
   var r = []
   for (let i = 0; i < queries.length; i++) {
      var s = 0
      for (let j = 0; j < strings.length; j++) {
         if (queries[i] == strings[j]) {
            s++
         }
      }  
      r[i] = s    
   }
   return r
}

var str = ['aba','baba','aba','xbxz'] 
var qrs = ['aba','xbxz','ab']

console.log(matchingStrings(str,qrs))