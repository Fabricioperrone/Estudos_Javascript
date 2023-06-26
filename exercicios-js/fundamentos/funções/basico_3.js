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
    for(let n of numeros) {
        total += n
    }
    return total
}


console.log(somar(1,2,3))
console.log(somar(1,2,3,4,5,6))
console.log(somar(1,2,3,4,5,6,7,8,9,10))

const potencia = (base) => {
    return (exp) => {
        return Math.pow(base, exp)
    }
}

console.log(potencia(2)(8))