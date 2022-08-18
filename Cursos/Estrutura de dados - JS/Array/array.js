var avgTemp = [];

avgTemp[0] = 31.9
avgTemp[1] = 32
avgTemp[2] = 35.1
avgTemp[3] = 29
avgTemp[4] = 18.8

console.log(avgTemp[2]);

//var dayOfWeek = new Array(); inicia vazio
//var dayOfWeek = new Array(7); array de tamanho =7
var dayOfWeek = ['domingo','segunda', 'terça', 'quarta','quinta','sexta','sabado'];

console.log(dayOfWeek[3]);

for (let i = 0; i < dayOfWeek.length; i++) {
  console.log(dayOfWeek[i]);
}

var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];  
}
console.log(fibonacci);



