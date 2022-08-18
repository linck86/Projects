function Dictionary() {
   var items = {}

   this.set = function(key, value) {
      //add um novo item ao dic
      items[key] = value
   }

   this.delete = function(key) {
      //remove valor do dic usando a chave
      if (this.has(key)) {
         delete items[key]
         return true
      }
      return false
   }

   this.has = function(key) {
      //verifica se key existe, retorna bool
      return items.hasOwnProperty(key)
   }

   this.get = function(key) {
      //retorna valor a partir da chave
      // if (this.has(key)) {
      //    // console.log(items[key])
      //    return items[key]
      // }
      // return undefined
     return this.has(key) ? items[key] : undefined
   }

   this.clear = function() {
      //deleta todos items do dic
      items ={}
   }

   this.size = function() {
      //retorna a quantidade de elementos no dic
      return Object.keys(items).length
   }

   this.keys = function() {
      //retorna array com todas as chaves
      return Object.keys(items)
   }

   this.value = function() {
      //retorna array com todos valores
      var values = []
      keys = Object.keys(items)

      for (let i = 0; i < keys.length; i++) {
         values.push(items[keys[i]])
      }
      return values
   }

   this.getItems = function(params) {
      return items
   }
}

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

function Graph(){
   var vertices = []
   var adjList = new Dictionary()

   this.addVertex = function(v){
      vertices.push(v)
      adjList.set(v, [])
   }

   this.addEdge = function(v, w){
      adjList.get(v).push(w)
      adjList.get(w).push(v)
   }

   this.toString = function(){
      var s = ''
      for (let i = 0; i < vertices.length; i++) {
         s += vertices[i] + ' -> '
         var neighbors = adjList.get(vertices[i])
         for (let j = 0; j < neighbors.length; j++) {
            s+= neighbors[j] + ' '      
         }    
         s += '\n'     
      }
      return s
   }

   var initializeColor = function (){
      var color = []
      for (let i = 0; i < vertices.length; i++) {
         color[vertices[i]] = 'white'         
      }
      return color
   }

   this.bfs = function(v, callback){
      var color = initializeColor(),
      queue = new Queue();
      queue.enqueue(v)

      while(!queue.isEmpty()){
         var u = queue.dequeue(),
         neighbors = adjList.get(u)
         color[u] = ' grey'
         for (let i = 0; i < neighbors.length; i++) {
            var w = neighbors[i]
            if (color[w] === 'white') {
               color[w] = 'grey'
               queue.enqueue(w)
            }            
         }
         color[u] = 'black'
         callback(u)
      }
   }

   this.dfs = function(callback) {
      var color = initializeColor()
      for (let i = 0; i < vertices.length; i++) {
         if (color[vertices[i]] === 'white') {
            dfsVisit(vertices[i], color, callback)
         }         
      }
   }

   var dfsVisit = function(u, color, callback) {
      color[u] = 'grey'
      callback(u)

      var neighbors = adjList.get(u)
      for (let i = 0; i < neighbors.length; i++) {
         var w = neighbors[i]
         if (color[w] === 'white') {
            dfsVisit(w, color, callback)
         }       
      }
      color[u] = 'black'
   }
}

function printNode(v) {
   console.log('Visited vertex: ' + v)
}

var graph = new Graph()
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (let i = 0; i < myVertices.length; i++) {
   graph.addVertex(myVertices[i])   
}

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

// console.log(graph.toString())
// graph.bfs(myVertices[0], printNode)
graph.dfs(printNode)