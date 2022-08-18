function Set() {
   var items = {}
   
   this.add = function (value) {
      //add novo item ao conjunto
      if (!this.has(value)) {
         items[value] = value
         return true
      }
      return false
   }

   this.delete = function (value) {
      //remove um valor do conjunto
      if (this.has(value)) {
         delete items[value]
         return true
      }
      return false
   }

   this.has = function (value) {
      //retorna se o valor existe ou nao
      return items.hasOwnProperty(value)
   }

   this.clear = function () {
      //remove tds itens do conjunto
   }

   this.size = function () {
      //tamanho do conjunto
      return Object.keys(items).length
   }

   this.values = function () {
      //retorna array com tds valores do conjunto
      var values = [],
      keys = Object.keys(items)
      for (let i = 0; i < keys.length; i++) {
         values.push(items[keys[i]])        
      }
      return values
   }

   this.union = function(otherSet) {
      var unionSet = new Set()
      values = this.values()

      for (let i = 0; i < values.length; i++) {
         unionSet.add(values[i])         
      }

      this.values = otherSet.values()

      for (let i = 0; i < values.length; i++) {
         unionSet.add(values[i])         
      }

      return unionSet
   }

   this.intersection = function(otherSet) {
      var intersectionSet = new Set()
      values = this.values()

      for (let i = 0; i < values.length; i++) {
         if (otherSet.has(values[i])) {
            intersectionSet.add(values[i])         
         }
      }
      return intersectionSet
   }

   this.diference = function(otherSet) {
      var diferenceSet = new Set()
      values = this.values()

      for (let i = 0; i < values.length; i++) {
         if (!otherSet.has(values[i])) {
            diferenceSet.add(values[i])         
         }
      }
      return diferenceSet
   }

   this.subset = function(otherSet) {
      if (this.size() > otherSet.size()) {
         return false
      }else{
         values = this.values()
         
         for (let i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
               return false
            }
         }
      }
      return true
   }
}

// var set = new Set()

// set.add(1)
// set.add(2)
// set.add(3)
// set.add(4)

// set.delete(4)
// console.log(set.values(4))
// console.log(set.size())
// console.log(set.has(4))

var setA = new Set()
setA.add(1)
setA.add(2)

var setB = new Set()
setB.add(1)
setB.add(2)
setB.add(3)

var setC = new Set()
setC.add(2)
setC.add(3)
setC.add(4)

// var diferenceAb = setA.intersection(setB)
console.log(setA.subset(setB))
console.log(setA.subset(setC))
