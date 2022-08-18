function list() {
  var Node = function (e) {
    this.e = e
    this.next = null
  }

  var length = 0
  var head = null

  this.append = function (e) {
    //add elemento no fim da lista
    var node = new Node(e),
      current

    if (head === null) {
      head = node
    } else {
      current = head

      while (current.next) {
        current = current.next
      }

      current.next = node
    }
    length++
  }

  this.insert = function (position, e) {
    // add elemento em uma posição especifica
    if (position >= 0 && position <= length) {
      var node = new Node(e),
      current = head,
      previous,
      index = 0

      if (position === 0) {
        node.next = current
        head = node
      }else{
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }
      length++
      return true
    }else{
      return false
    }
  }

  this.removeAt = function (position) {
    //remove o elemento de uma posição especifica
    if (position > -1 && position < length) {
      var current = head,
      previous,
      index = 0

      if (position === 0) {
        head = current.next
      }else{
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      length--
      return current.e
    }else{
      return null
    }
  }

  this.remove = function (e) {
    //remove o elemento e
    var index = this.indexOf(e)
    return this.removeAt(index)
  }

  this.indexOf = function (e) {
    //retorna a posição do elemento
    var current = head,
    index = 0

    while (current) {
      if (e === current.e) {
        return index
      }
      index++
      current = current.next
    }
    return - 1
  }

  this.isEmpty = function () {
    //retorna se a instancia esta vazia
    return length === 0
  }

  this.size = function () {
    //retorna o tamanhao
    return length
  }

  this.getHead = function () {
    return head
  }

  this.toString = function () {
    //converte em string
    var current = head
    string = ''

    while (current) {
      string += current.e + ' '
      current = current.next
    }

    return string
  }

  this.print = function () {
    //imprime no console
    console.log(this.toString())
  }
}

var ll = new list()
ll.append('joão')
ll.append('ze')
ll.append('kati')
ll.append('dani')

ll.print()
ll.removeAt(1)//remove o segundo elemento
ll.print()
ll.insert(3,'carlos')
ll.print()

console.log(ll.indexOf('carlos'))//imprime a posição de carlos
ll.remove('carlos')
ll.print()

