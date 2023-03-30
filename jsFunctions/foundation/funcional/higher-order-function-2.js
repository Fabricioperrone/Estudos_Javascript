/**
 * Functions that operate on other functions,
 * either by taking them  as  arguments or by
 * returning them, are called higher-order functions.
 *
 */
//função retornando outra função

// nome dessa técnica: curring

function finalPrice(tax, price) {
    return function (price) {
        return price * (1 + tax)
    }
}

const nycFinalPrice = finalPrice(0.0875)// taxa pré-definida (imposto)

console.log(nycFinalPrice(25.1)) // chamando função anônima, passando só price
console.log(nycFinalPrice(21.7))
console.log(nycFinalPrice(107.9))