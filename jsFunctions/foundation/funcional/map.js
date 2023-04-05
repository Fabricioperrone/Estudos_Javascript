
//usando a função MAP para tranformar um array em outro array
const numbers = [1, 2, 3, 4, 5, 6]

const numbersV2 = numbers.map(elemento => elemento * 2)



console.log(numbersV2)

const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 },
]

const getScore = elemento => elemento.score

const result = students

    .map(getScore)
    .map(Math.ceil) // arrendonda os valores para cima
    .map(Math.floor) // arredonda para baixo

console.log(students, result)