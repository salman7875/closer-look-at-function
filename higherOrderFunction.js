'use strict';

// Function Accepting other Function as an Input
const oneWord = function(str) {
    return str.replaceAll(' ', '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}
console.log(upperFirstWord('doctor xd'));

// Higher Order Function
const transformer = function(str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

console.log('------------------------------');
// Function Returning Function

const greet1 = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}
const greeter1 = greet1('hey');
greeter1('Jack');
greeter1('tiger');

greet1('By')('Jerry');

console.log('---------------------------------------');

const greet = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`);
    }
}
const greeter = greet('Hey');
greeter('doctor');
greeter('Scout');

greet('hii')('Ninja');