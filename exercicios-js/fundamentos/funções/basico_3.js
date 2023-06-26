// Arrow function

const { number } = require("assert-plus")

const felizNatal = () => console.log("Feliz natal!!!!")

felizNatal()

const saudacao = (nome) => `Fala ${nome}, blz?!?`
//"Fala " + nome + ", blz!?!"
console.log(saudacao('Fabrício'))

const somar = (...numeros) => {
    console.log(Array.isArray(numeros))
    let total = 0
    for (let n of numeros) {
        total += n
    }
    return total
}


console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5, 6))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

const potencia = base => exp =>  Math.pow(base, exp)
console.log(potencia(2)(10))

// this
Array.prototype.log = function() {
    console.log(this)
}

const numeros = [1,2,3]
numeros.log()

// ultimo elemento

Array.prototype.ultimo = function() {
    console.log(this[this.length - 1])
}

const numeros2 = [1,2,3]
numeros.ultimo()

// primeiro

Array.prototype.primeiro = function() {
    console.log(this[this.length - 1])
}

const numeros3 = [1,2,3]
numeros.primeiro()