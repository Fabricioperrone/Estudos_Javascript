const numbers = [1, 2, 3, 4, 5, 6]

// criando uma constante para somar os números do array
const soma = (total, elemento) => total + elemento
const total = numbers.reduce(soma)

console.log(total)

// calculando a média 
const avg = (acumalador, elemento, indice, array) => {
    if (indice === array.length - 1) {
        return (acumalador + elemento) / array.length
    } else {
        return acumalador + elemento
    }
}
console.log(numbers.reduce(avg))