/**
 * Functions that operate on other functions,
 * either by taking them  as  arguments or by
 * returning them, are called higher-order functions.
 *
 */

/**
 * Passando uma função com parâmetros para outra função
 */
function run(fn) {
     return  `Result: ${fn()}` 
}

function sayHello() {
    console.log('Hello!')
}

run(sayHello)

// função anônima
run(function() {
    console.log('run!!!')
})

const result = run(Math.random)
console.log(result)