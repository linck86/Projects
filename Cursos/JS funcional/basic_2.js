function bomDia() {
    console.log('Bom Dia')
}

function boaTarde(){
    console.log('Boa Tarde')
}

// passa uma function como parampara outra function
function run(fn) {
    if (typeof fn === 'function') {
        fn()
    }
}

run(3)
run(boaTarde)
run(bomDia)

//Retorna uma function apartir de outra function
function pow(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}

const pow2 = pow(2)
console.log(pow2(8))

const pow34 = pow(3)(4)
console.log(pow34)


