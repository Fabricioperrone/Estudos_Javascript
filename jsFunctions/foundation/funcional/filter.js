
const numbers = [1, 2, 3, 4, 5, 6]

const sejaMaiorQueZero = elemento => elemento > 0
const sejaMaiorQueDez = elemento => elemento > 10
const pares = elemento => elemento % 2 === 0

console.log(numbers.filter(elemento => elemento > 0))
console.log(numbers.filter(sejaMaiorQueZero))
console.log(numbers.filter(sejaMaiorQueDez))
console.log(numbers.filter(pares))

const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 },
]

/**
 * Filtrando os melhores alunos
 */
const greatStudents = students => students.score >=9

console.log(students.filter(greatStudents))
