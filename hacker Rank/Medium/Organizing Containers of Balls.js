function organizingContainers(containers) {
   var n = containers.length
   capacidadeContainer = []
   quantidadeBolas = []
   
   for (let i = 0; i < n; i++) {
      quantidadeBolas.push(0)
   }

containers.forEach(container => {
   total_do_container = container.reduce(function (a, b) { return a + b; }, 0);
   capacidadeContainer.push(total_do_container)
   for (var tipo in container) {
      quantidadeBolas[tipo] += container[tipo]
   }
});
capacidadeContainer.sort()
quantidadeBolas.sort()

if (JSON.stringify(capacidadeContainer) == JSON.stringify(quantidadeBolas)) {
   return 'Possible'
}
return 'Impossible'
}

console.log(organizingContainers([[1,3,1],[2,1,2],[3,3,3]]))
console.log(organizingContainers([[0,2,1],[1,1,1],[2,0,0]]))
console.log(organizingContainers([[2,0,0],[1,1,1],[0,2,1]]))