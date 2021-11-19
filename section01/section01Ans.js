"use strict";
console.log("Solution for Section 1 goes here.");
function factorialFunction(var1) {
    let resultFactorial = 0;
    if (var1 === 0) {
        return 1;
    }
    else {
        resultFactorial = var1 * factorialFunction(var1 - 1);
    }
    return resultFactorial;
}
var userInput = Number(prompt('Please enter N data number.'));
console.log(`The result of ${userInput} => `, factorialFunction(userInput));
