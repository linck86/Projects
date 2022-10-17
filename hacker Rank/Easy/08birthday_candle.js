function birthdayCakeCandles(candles) {
   var maxValue = candles.reduce(function(prev, current) { 
      return prev > current ? prev : current; 
   })
   var repeat = 0
   candles.forEach(e => {
      if (e == maxValue) {
         repeat++
      }
   })
   return repeat

}
var candle = [3,2,1,3]
console.log(birthdayCakeCandles(candle))