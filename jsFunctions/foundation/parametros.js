function logParams(a, b, c) {
    console.log(a, b, c)
}

logParams(1, 2, 3)
logParams(1, 2, 3, 4, 5)
logParams(1, 2)
logParams(1)
logParams()

// Definindo umm valor padrão
function defaultParams(a = 9, b = 10, c = 0) {
    console.log(a, b, c)
}
defaultParams(7, 8, 9)
defaultParams(7, 8)
defaultParams(7)
defaultParams()


/** Arrays
// operador: spread/rest
// ... siginifica que vc vai receber uma qtd variavel de parametros e todos os para. 
// armazenado em uma função
 * 
 * @param  {...any} nums 
 */
function logNums(...nums) {
    console.log(Array.isArray(nums))// verifica se é um array
    for (let n of nums) {
        console.log(n)
    }
}
logNums(1, 2, 4, 5, 6);


// simpicando o código
function logNums(...nums) {
    console.log(nums)
}
logNums(1, 2, 3, 4, 5, 6);

// somando todos os números
function sumAll(...nums) {
    let total = 0;
    for(let n of nums) {
        total += n
    }
    return total
}
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))