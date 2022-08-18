function priorityQueue() {
  var items = []

  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }

  this.enqueue = function(element, priority) {
    var queueElement = new QueueElement(element, priority) 
    var added = false

    for (let i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0 ,queueElement)
        added = true
        break
      }
    }
    if (!added) {
      items.push(queueElement)
    }
  }

  this.dequeue = function() {
    return items.shift()
  }

  this.print = function() {
    for (let i = 0; i < items.length; i++) {
      console.log(items[i].element + ' ' + items[i].priority)
    }
  }
}

var pqueue = new priorityQueue()
pqueue.enqueue('carlos', 2)
pqueue.enqueue('ana', 1)
pqueue.enqueue('lucas', 1)

pqueue.print()