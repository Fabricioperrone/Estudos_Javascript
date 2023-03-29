// Anonymous function
// IIFE - Imediately Invoked Function Expression
(function (a, b, c) {
    let x = 3
    console.log(`Result: ${a + b + c}`)
    console.log(x)
})(1, 2, 3);

(function () {
    let x = 300
    console.log(x)
})();

//função arrow
(() => {
    console.log('Arrow #1')
})();

// Simplificado
(() =>  console.log('Arrow #2'))();
   
