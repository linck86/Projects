function baseConverter(decNum, base) {
  var restStack =[],
  rest,
  baseString = '',
  digits = '0123456789ABCDEF'

  while (decNum > 0) {
    rest = Math.floor(decNum % base)
    restStack.push(rest)
    decNum = Math.floor(decNum / base)
  }

  while (restStack.length > 0 ) {
    console.log(restStack)
    baseString += digits[restStack.pop()]
  }

  return baseString
}

console.log(baseConverter(15535,16))
