function decToBin(decNum){
  var restStack = [],
  rest,
  binaryString = ''

  while (decNum > 0 ) {
    rest = Math.floor(decNum % 2)
    restStack.push(rest)
    decNum = Math.floor(decNum / 2)
  }

  while (restStack.length > 0 ) {
    console.log(restStack)
    binaryString += restStack.pop().toString()
  }

  return binaryString
}

console.log(decToBin(8))