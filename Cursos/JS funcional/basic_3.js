//arrow function 
const felizNatal = () => console.log('feliz natal')
felizNatal() // a "=>" substitui " function"

const saudacao = nome => `feliz natal ${nome}!!` //não precisa do parenteses se for só um parametro
// função sem chave ja tem return embutido
console.log(saudacao('Maria'))

const somar = ns =>{
    let total = 0
    for (let n of ns) {
        total += n
    }
    return total
}