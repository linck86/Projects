function dayOfProgrammer(year) {
   if (year<1918) {
      if (year % 4 == 0) {
         var date = '12.09.'
      }else{
         var date = '13.09.'
      }
   } else if (year>1918) {
      if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
         var date = '12.09.'
      }else{
         var date = '13.09.'
      }
   } else{
      var date = '26.09.'
   }
   return date + year
}
console.log(dayOfProgrammer(1800))
console.log(dayOfProgrammer(1802))
console.log(dayOfProgrammer(1803))
console.log(dayOfProgrammer(1804))