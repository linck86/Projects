function timeConversion(s) {
   var h = s.substring(0,2)
   if (s[8] == 'P') {
      s = s.replace('PM','')
      if (h == '12') return s
      var hPM = (parseInt(h) + 12).toString()
      var r = s.replace(h,hPM)
   }else{
      var r = s.replace('AM','')
      if (h == '12') {
         r = r.replace('12','00')
      }
   }
   return r
}

console.log('01:00:00AM ',timeConversion('01:00:00AM'))
console.log('08:00:00AM ',timeConversion('08:00:00AM'))
console.log('12:00:00AM ',timeConversion('12:00:00AM'))
console.log('01:00:00PM ',timeConversion('01:00:00PM'))
console.log('05:00:00PM ',timeConversion('05:00:00PM'))
console.log('11:59:00PM ',timeConversion('11:59:00PM'))
console.log('12:00:00PM ',timeConversion('12:00:00PM'))