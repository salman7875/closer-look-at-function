'use strict';

// Immediatly invoked function expression (IIFE): When we want the function to Execute only 1 time.
// They are also use to create new scope for data privacy
// We use paranthesis to trick JAVASCRIPT to think it is an expression
(function() {
    console.log('This will never run again.');
    const isPrivate = 23;
})();   // We calling it here

// console.log(isPrivate);  // Error 

// Arrow 
(() => {
    console.log('This will also never run again!');
})();

// Some more example with data privacy. With LET and CONST

{ 
    let isPrivate1 = 44;
    const isPrivate2 = 67;
    var notPrivate3 = 56;
}

// console.log(isPrivate1);   // Error
// console.log(isPrivate2);   // Error
console.log(notPrivate3);  