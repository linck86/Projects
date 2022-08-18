function Stack() {
  var items = []
  this.push = function (element) {
    //add novo item na pilha
    items.push(element)
  }

  this.pop = function () {
    //remove o item do topo da pilha 
    return items.pop()
  }

  this.peek = function () {
    // retona o elemento do topo da pilha 
    return items[items.length - 1]
  }

  this.isEmpty = function () {
    // informa se pilha esta vazia ou não 
    return items.length === 0
  }

  this.clear = function () {
    // limpa a pilha 
    items = []
  }

  this.size = function () {
    // tamanho da pilha 
    return items.length
  }

  this.print = function () {
    // imprime a pilha 
    console.log(items.toString())
  }
}

var pilha = new Stack()

pilha.push(2) //add o elemento
pilha.push(4)
pilha.push(6)
pilha.push(8)
pilha.push(10)

pilha.pop() // remove o ultimo elemento(10)(topo)

console.log(pilha.isEmpty())

console.log(pilha.peek())//retorna o ultimo elemento (topo)

console.log(pilha.size())

pilha.print()

pilha.clear()
pilha.print()