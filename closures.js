'use strict';

// A closures makes a function remember all the variable that existed at the function's bithplace
// Any function always has access to the variable environment of the execution context in which the function was created. Even after that execution context is gone(poped off). The closure is then basically this variable environment attached to the function, exactly as it was at the time and place that the function was created. 

const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passenger`);
    }
}

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);


// More about closures
// Example 1
let f;

const g = function() {
    const a = 23;
    console.log(a);
    f = function() {
        console.log(a * 2);
    }
}

const h = function() {
    const b = 767;
    f = function() {
        console.log(b * 2);
    }
}

g();
f();   
console.dir(f);   // closure is a

// Re-assigning f function 
h();
f();
console.dir(f);   // closure is b


// Example 2
const boardPassengers = function(numPassenger, waitTime) {
    const perGroup = numPassenger / 3;

    setTimeout(function() {
        console.log(`We are now boarding all ${numPassenger} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers.`);
    }, waitTime * 1000);

    console.log(`Will start boarding in ${waitTime} seconds`);
}

// const perGroup = 1000;   Example that closures have priority over scope chain
boardPassengers(180, 3);