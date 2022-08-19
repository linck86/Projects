function staircase(n) {
   var r = ''
   for (let i = 0; i < n; i++) {
      r += ' '.repeat(n-(i+1))
      r += '#'.repeat(i+1)
      console.log(r) 
      r = ''   
   }
}

staircase(6)