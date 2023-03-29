// function Expression
const increment1 = function (n) {
    return n + 1
}

// Usando function arrow sempre é uma função anônima
const increment2 = (n) => {
    return n + 1
}

const increment3 = n => {
    return n + 1
}

// exemplo mais simplicado
const increment4 = n =>  n + 1 

   

console.log(increment1(1))
console.log(increment2(5))
console.log(increment3(24))
console.log(increment4(25))

// outro exemplo de arrow com dois parametros
const sum = (a, b) => a + b
console.log(sum(3, 8))