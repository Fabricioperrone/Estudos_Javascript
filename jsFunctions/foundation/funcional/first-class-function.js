/**
 * A programing language is said to have
 * First-class functions when functions in
 * that language are treated like any another
 * variable
 */
// function expression
const add = function (a, b) { // atribuindo uma função para uma variável constante
    return a + b
}

console.log(add(10, 20))

const subtract = function (a, b){
    return a - b
}

console.log(subtract(10, 20))

// função arrow
const multiply = (x, y) => x * y
const divide = (x, y) => x / y

console.log(multiply(10,20))
console.log(divide(10,20))