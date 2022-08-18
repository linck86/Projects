function Queue() {
  var items = []

  this.enqueue = function (element) {
    //add novo item
    items.push(element)
  }

  this.dequeue = function () {
    //remove um item
    return items.shift()
  }

  this.front = function () {
    //retorna o primeiro elemento da fila
    return items[0]
  }

  this.isEmpty = function () {
    // retorna true or false
    return items.length === 0
  }

  this.size = function () {
    //tamanho da fila
    return items.length
  }

  this.print = function () {
    //imprime a fila
    console.log(items.toString())
  }
}

// var fila = new Queue()

// fila.enqueue('carlos')
// fila.enqueue('ana')
// fila.enqueue('lucas')
// console.log(fila.front())

// fila.print()

// fila.dequeue()
// fila.print()

function hotPotato(nameList, num) {
  var queue = new Queue

  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])    
  }

  var eliminated = ''

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminated = queue.dequeue()
    console.log(eliminated + ' was eliminated from the hot potato game')
  }
  return queue.dequeue()
}

var names = ['joao1', 'ze2', 'kati3','dani4','ab5']
var winner = hotPotato(names, 7)
console.log('the winner is: ' + winner)