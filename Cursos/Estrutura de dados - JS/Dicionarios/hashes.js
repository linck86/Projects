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

function hashTable() {
   var table = {}

   this.put = function(key, value) {
      //add um novo elemento
      var position = losoloseHashCode(key)
      console.log(position + ' ' + key)
      table[position] = value
   }

   this.remove = function(key) {
      //remove elemento
      table[losoloseHashCode(key)] = undefined
   }

   this.get = function(key) {
      //retorna um val
      return table[losoloseHashCode(key)]
   }

   var losoloseHashCode = function(key) {
      //retorna valor a partir da chave
      var hash = 0
      for (let i = 0; i < key.length; i++) {
         hash += key.charCodeAt(i)         
      }
      return hash % 37
   }
}

var hash = new hashTable()

hash.put('a','1')
hash.put('bdb','2')
hash.put('c','3')