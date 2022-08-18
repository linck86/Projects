function dobleLinkedList() {
  var Node = function (e) {
    this.e = e
    this.next = null
    this.prev = null
  }

  var length = 0
  var head = null
  var tail = null

  this.append = function (e) {
    //add elemento no fim da lista
    var node = new Node(e),
    current

    if (head === null) {
      head = node
      tail = node
    } else {
      current = head

      while (current.next) {
        current = current.next
      }
      current.next = node
      tail = node
    }
    length++
  }

  this.insert = function (position, e) {
    // add elemento em uma posição especifica
    if (position >= 0 && position <= length) {
      var node = new Node (e),
      current = head,
      previous,
      index = 0

      if (position === 0) {
        if (!head) {
          head = node
          tail = node
        }else{
          node.next = current
          current.prev = node
          head = node
        }
      }else if(position === length){
        current = tail
        current.next = node
        node.prev = current
        tail = node
      }else{
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
        current.prev = previous
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

        if (length === 1) {
          tail = null
        }else{
          head.prev = null
        }
      }else if(position === length - 1){
        current = tail
        tail = current.prev
        tail.next = null
      }else{  
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
        current.next = previous
      }
      length--
      return current.e
    }else{
      return null
    }
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

var dll = new dobleLinkedList()
dll.print()
dll.append('joão')
dll.append('ze')
dll.append('kati')

dll.print()
dll.insert(0,'maria1')
dll.insert(4,'maria2')
dll.insert(2,'maria3')
dll.print()

dll.removeAt(0)//remove o segundo elemento
dll.print()
dll.removeAt(4)//remove o segundo elemento
dll.print()
dll.removeAt(2)//remove o segundo elemento
dll.print()
//console.log(dll.indexOf('carlos'))//imprime a posição de carlos
//dll.remove('carlos')
//dll.print()

