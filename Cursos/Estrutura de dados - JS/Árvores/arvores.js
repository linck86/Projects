function BinarSearchTree() {
   var Node = function(key) {
      this.key = key
      this.left = null
      this.right = null
   }
   var root = null

   this.insert = function(key) {
      //add uma nova key
      var newNode = new Node(key)

      if (root === null) {
         root = newNode
      }else{
         insertNode(root, newNode)
      }
   }

   var insertNode = function(node, newNode) {
      if (node.key > newNode.key) {
         if (node.left === null) {
            node.left = newNode
         }else{
            insertNode(node.left, newNode)
         }
      }else{
         if (node.right === null) {
            node.right = newNode
         }else{
            insertNode(node.right, newNode)
         }
      }
   }

   this.search = function(key) {
      //busca uma key
      return searchNode(root, key)
   }

   var searchNode = function(node, key) {
      if (node === null) {
         return false
      }
      if (key < node.key) {
         return searchNode(node.left, key)
      }else if(key > node.key){
         return searchNode(node.right, key)
      }else{
         return true
      }
   }

   this.remove = function(key) {
      //remove a chave
      root = removeNode(root, key)
   }

   var removeNode = function(node, key) {
      if (node === null) {
         return null
      }
      if (key < node.key) {
         node.left = removeNode(node.left, key)
         return node
      }else if(key > node.key){
         node.right = removeNode(node.right, key)
         return node
      }else{
         if (node.left === null && node.right === null) {
            node = null
            return node
         }
         if (node.left === null) {
            node = node.right
            return node
         }else if(node.right === null){
            node = node.right
            return node
         }
         var aux = findMinNode(node.right)
         node.key = aux.key
         node.right = removeNode(node.right, aux.key)
         return node
      }
   }

   var findMinNode = function(node) {
      while (node && node.left !== null) {
         node = node.left
      }
      return node
   }

   this.min = function() {
      //retorna a menor chave
      return minNode(root)
   }

   var minNode = function(node) {
      if (node) {
         while (node && node.left !== null) {
            node = node.left
         }
         return node.key
      }
      return null
   }

   this.max = function() {
      //retorna a maior chave
      return maxNode(root)
   }

   var maxNode = function(node) {
      if (node) {
         while (node && node.right !== null) {
            node = node.right
         }
         return node.key
      }
      return null
   }
   
   this.inOrderTraverse = function(callback) {
      //visita tds nos da arvores usado um percurso em ordem
      inOrderTraverseNode(root, callback)
   }

   var inOrderTraverseNode = function(node, callback) {
      if (node !== null) {
         inOrderTraverseNode(node.left, callback)
         callback(node.key)
         inOrderTraverseNode(node.right, callback)
      }
   }

   this.preOrderTraverse = function(callback) {
      //visita tds nos da arvores usado um percurso pré ordem
      preOrderTraverseNode(root, callback)

   }

   var preOrderTraverseNode = function(node, callback) {
      if (node !== null) {
         callback(node.key)
         preOrderTraverseNode(node.left, callback)
         preOrderTraverseNode(node.right, callback)
      }
   }

   this.posOrderTraverse = function(callback) {
      //visita tds nos da arvores usado um percurso pós ordem
      posOrderTraverseNode(root, callback)
      
   }

   var posOrderTraverseNode = function(node, callback) {
      if (node !== null) {
         posOrderTraverseNode(node.left, callback)
         posOrderTraverseNode(node.right, callback)
         callback(node.key)
      }
   }

}

function printNode(v) {
   console.log(v)
}

var tree = new BinarSearchTree()

tree.insert(11)
tree.insert(45)
tree.insert(23)
tree.insert(3)
tree.insert(16)
tree.insert(27)
tree.insert(15)
tree.insert(18)
tree.insert(29)
tree.insert(35)
tree.insert(48)
tree.insert(13)

// console.log(tree.search(11)) //true
// console.log(tree.search(55)) //false

// console.log(tree.min()) //3
// console.log(tree.max()) //48

tree.remove(45) //remove chave e reorganiza arvore

tree.inOrderTraverse(printNode)
// tree.preOrderTraverse(printNode)
// tree.posOrderTraverse(printNode)
