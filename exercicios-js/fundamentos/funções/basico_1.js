
// Variável
let a = 4 
console.log(a)

// Function Declaration
function bomDia(){
    console.log('Bom dia!')
}
// Chamando função
bomDia()

// Function Expression

const boaTarde = function (){
    console.log('Boa tarde!')
}

boaTarde()


function somar(a = 0, b = 0) {
    return a + b
}

let resultado = somar(3,4)
console.log(resultado)

resultado = somar(3,5,7,8,6)
console.log(resultado)

resultado = somar(3)
console.log(resultado)

resultado = somar()
console.log(resultado)