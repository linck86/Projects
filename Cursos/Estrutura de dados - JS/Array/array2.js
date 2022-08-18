var numbers = [0,1,2,3,4,5,6,7,8,9];
numbers.push(10);//insere no fim
numbers.unshift(-1); //insere no inicio do array

numbers.pop()  //remove o ultimo
numbers.shift()//remove o primeiro

numbers.splice(3,3); //a partir da posição 3 remove 3 elementos
numbers.splice(3, 0, 4, 4 ,5); // a partir da posição 3 insere os numeros depois do zero(que é o que faz com que nao serja removido nada)

console.log(numbers);
