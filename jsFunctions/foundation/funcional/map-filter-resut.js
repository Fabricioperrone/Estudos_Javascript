const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 },
]

const greatStudents = students => students.score >= 9
const getScore = elemento => elemento.score
const avg = (acumalador, elemento, indice, array) => {
    if (indice === array.length - 1) {
        return (acumalador + elemento) / array.length
    } else {
        return acumalador + elemento
    }
}

console.log(
    students
        .filter(greatStudents)
        .map(getScore)
        .reduce(avg)
)