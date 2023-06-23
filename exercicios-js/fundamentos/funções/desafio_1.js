/**
 * Somar(3)(4)(5)
 *  
 * fn  -> 3 * 7
 * fn  -> 3 * 7
 * fn  -> 3 * 7
 * 
 * calcular(3)(7)(fn)
 */

function somar(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

const somarAB = somar(3)(4)
console.log(somarAB(13))
console.log(somar(13)(20)(30))

function calcular(x) {
    return function (y) {
        return function(fn) {
            return fn(x, y)
        }
    }
}

function subtrair (a, b) {
    return a - b
}


function multiplicar (a, b) {
    return a * b
}

// chamando a função
const  resultado1 = calcular(10)(5)(subtrair)
console.log(resultado1)

const  resultado2 = calcular(10)(5)(multiplicar)
console.log(resultado2)
