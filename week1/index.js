console.log('hello its me bikash')

// inputing two numbers
const num1 = 8;
const num2 = 10;

//adding the two numbers
const sum = num1 + num2;

// displaying the result 
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

const prompt = require('prompt-sync')(); 
console.log("starting")
const name = prompt('Enter your name: ');
console.log(`Hello, ${name}`);

const number = parseInt(prompt("Enter a number: "));

if (number > 0 ) {
    console.log("The number is positive");
}

else if (number == 0) {
    console.log("The number is zero");
}

else {
    console.log("The number is negative");
}