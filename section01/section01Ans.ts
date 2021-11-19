console.log("Solution for Section 1 goes here.");

function factorialFunction(var1: number): number {
  let varFactorial: number = 1;

  // get the result of factorial.
  for (let index = 2; index<=var1; index++) {
    varFactorial = varFactorial * index;
  }

  return varFactorial;
}

function sumOfDigits(numVar: number): number {
    // convert to string.
    const strVar = `${numVar}`;
    let sumDigits: number = 0;

    // sum of the digits in array of string.
    for (let index = 0; index < strVar.length; index++) {
        // the sums of converted integers.
        sumDigits += +(strVar[index]);
    }

    return sumDigits;
}

function sumDigitsFactorial(digitNum: number): number {
    return sumOfDigits(factorialFunction(digitNum));
}

var userInput = Number(prompt("Please enter N data number."));
console.log(`The result of factorial of ${userInput}! => `, factorialFunction(userInput));
console.log(`The sum of the digits in the number ${userInput}! => `, sumDigitsFactorial(userInput));