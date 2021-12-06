// Functions

// name (and lastName) is a parameter of the greet function.
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName)
}

// John is an argument to the greet function
greet('John', 'Smith');
greet('John');
greet('John', null);

// Calculating a value
function square(number) {
    return number * number
}

square(2);
console.log(square(2));

let squareOfTwo = square(2);
console.log(squareOfTwo);