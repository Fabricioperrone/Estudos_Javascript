const { type } = require("os")





function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

    .then(primeiroElemento) // uma romessa irá gerar um único valor
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)


