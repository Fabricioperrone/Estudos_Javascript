// Anonymous function
(function (a, b, c) {
    return a + b + c
})

// Function expression

const sum = function (a,b){
    return a + b
}
// chamando a function
const result = sum(7, 59)
console.log(result)

const anotherSum = sum
console.log(anotherSum(5, 9))