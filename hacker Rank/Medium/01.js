function formingMagicSquare(s) {
   // somando o valores
   var line = []
   var column = []
   for (let i = 0; i < s.length; i++) {
      // var reducer = (accumulator, curr) => accumulator + curr;
      // line[i] = s[i].reduce(reducer)
      for (let j = 0; j < s.length; j++) {
         // console.log(s[j][i])
         if(typeof column[j] === 'undefined'){
            column[j] = s[i][j]
         }else{
            column[j] = column[j] + s[i][j]
         }
         if(typeof line[i] === 'undefined'){
            line[i] = s[i][j]
         }else{
            line[i] = line[i] + s[i][j]
         }
      }
   }
   console.log(line)
   console.log(column)

   var vMagicSum = 15
   var rl = []
   var rc = []
   for (let i = 0; i < s.length; i++) {
      rl[i] = vMagicSum - line[i]      
      rc[i] = vMagicSum - column[i]      
   }
   var r = 0
   if (JSON.stringify(rl)==JSON.stringify(rc)) {
      for (let i = 0; i < s.length; i++) {
         r += rl[i]
      }   
   }else{
      for (let i = 0; i < s.length; i++) {
         r += rl[i] + rc[i]
      }
   }

   console.log(rl)
   console.log(rc)
   console.log(r)

   //procurando qual é o valor da soma magica
   // var vMagicSum = null
   // var ocorrenciasMaior = -1
   // var targetLine = []
   // var targetColumn = []
   
   // if ((new Set(line)).size !== line.length) {
   //    console.log('true')
   //    for ( var i = 0 ; i < line.length ; i++ ) {
   //       var ocorrencias = 1;
   //       for ( var t = i+1 ; t < line.length ; t++ ){
   //         if ( line[i] == line[t] ){
   //           ocorrencias++;
   //         }
   //       }
         
   //       if ( ocorrencias > ocorrenciasMaior ) {
   //         vMagicSum = line[i];
   //         ocorrenciasMaior = ocorrencias;
   //       }
   //     }
       
   // }else{
   //    console.log('f')
   //    for ( var i = 0 ; i < column.length ; i++ ) {
   //       var ocorrencias = 1;
   //       for ( var t = i+1 ; t < column.length ; t++ ){
   //         if ( column[i] == column[t] ){
   //           ocorrencias++;
   //         }
   //       }
         
   //       if ( ocorrencias > ocorrenciasMaior ) {
   //         vMagicSum = column[i];
   //         ocorrenciasMaior = ocorrencias;
   //       }
   //     }
   //    }
   //    vMagicSum = 15
   //    for (let i = 0; i < column.length; i++) {
   //       if(vMagicSum != column[i]){
   //          targetColumn.push(i)
   //       }
   //       if(vMagicSum != line[i]){
   //          targetLine.push(i)
   //       }
   //   }
   
   //   console.log('targetLine',targetLine)
   //   console.log('targetColumn',targetColumn)

   // var targetColumn = []
   // for (let c = 0; c < column.length; c++) {
   //    if(vMagicSum != column[c]){
   //       // console.log(c)
   //       targetColumn.push(c)
   //    }
   // }

   // var r = []
   // for (let i = 0; i < target.length; i++) {
   //    targtLine[i] = vMagicSum - line[target[i]]
   // }
   
   // console.log(r)
   // return (r)
}

// s = [[5, 3, 4], [1, 5, 8], [6, 4, 2]]
s = [[4, 9, 2], [3, 5, 7], [8, 1, 5]]
// s = [[4, 8, 2], [4, 5, 7], [6, 1, 6]]
formingMagicSquare(s)