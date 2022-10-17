//omar 3 numeros

function somar(a) {
    return function (b) {
        return function (c) {
            return a+b+c
        }
    }
}

const somaAB = somar(3)(4)
console.log(somaAB(5)) 
console.log(somar(3)(4)(5)) // mesma coisa

//fn = + or - or * or /
//calc(3)(4)(fn)

function calc(a) {
    return function (b) {
        return function (fn) {
            return fn(a,b)
        }
    }
}

function subt(a, b) {
    return a - b
}

function mult(a, b) {
    return a * b
}

const r1 = calc(10)(5)(subt)
const r2 = calc(10)(5)(mult)
console.log(r1, r2)