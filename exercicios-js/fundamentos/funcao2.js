// Armazenando uma função em uma váriavel
const imprimirSoma = function(a,b) {
   console.log(a + b)
}
imprimirSoma(2,3)

// Armazenando uma função arrow em uma váriavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(2,3))
// retorno implicito
const subtracao = (a,b) => a - b
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!!')
