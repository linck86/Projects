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

var dic = new Dictionary()

dic.set('a','1')
dic.set('b','2')
dic.set('c','3')

console.log(dic.has('a'))//true
console.log(dic.get('b'))//retorna posição
console.log(dic.keys())//true
console.log(dic.value())//true
dic.delete('b')
console.log(dic.getItems())//true
