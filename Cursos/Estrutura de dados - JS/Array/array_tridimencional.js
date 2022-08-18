var month = [];

var firstWeek = [];
var lastWeek = [];

var avgTempWeek1 = [33, 35, 34, 32, 30, 29];
var avgTempWeek2 = [23, 31, 28, 29, 27, 25];
var avgTempWeek3 = [22, 24, 26, 22, 19, 18];
var avgTempWeek4 = [15, 16, 17, 11, 10, 12];

firstWeek = [avgTempWeek1, avgTempWeek2];
lastWeek = [avgTempWeek3, avgTempWeek4];

month = [firstWeek, lastWeek];

console.log(month[1][1][4],'week4 posição 4'); //week4 posição 4

for (let i = 0; i < month.length; i++) {
  for (let j = 0; j < month[i].length; j++) {
    for (let x = 0; x < month[i][j].length; x++) {
      console.log(month[i][j][x]);
    }
  }
}
