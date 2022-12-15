'use strict';

// Learning how to set THIS keyword manually and also why we would want to do that.

const airIndia = {
    airline: 'Airindia',
    iataCode: 'IN',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    } 
};

airIndia.book(123, 'Salman');
airIndia.book(754, 'Doctor');
console.log(airIndia.bookings);

const inwings = {
    airline: 'Inwings',
    iataCode: 'MH',
    bookings: [],
};

const book = airIndia.book;

// This Doesn't work as it become a regular function & regular function while calling make the THIS keyword 'undefined'
// book(234, 'Maddy');

// CALL METHOD.
// Reminder: Function is really just an Object and Object have Methods. So, Function can have Methods too. And Call Method is One of them.
// In call Method the first argument is exactly what we want the this keyword to point to.
// We call this CALL method and this CALL method will CALL the BOOK function with the THIS keyword set to inwings.
book.call(inwings, 234, 'Maddy');
console.log(inwings);

book.call(airIndia, 767, 'Don');
console.log(airIndia);

const swiss = {
    airline: 'Swiss air Lines',
    iataCode: 'SW',
    bookings: [],
};

book.call(swiss, 982, 'Badshah');
console.log(swiss);


// APPLY METHOD.
// It is same as CALL but it doesn't receive list of arguments after the THIS keyword, but instead it's going to take an array of the arguments. It will take the elements from that array and pass it into the function.
const flightData = [494, 'Notorious'];

book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);   // this is the same as apply 


// BIND: Bind also allows us to manually set the THIS keyword for any function call
// But, Bind doesn't immediately call the function. instead it returns a new function where the THIS keyword is bound. So, it's set to whatever value we pass into bind.

const bookSW = book.bind(swiss);
const bookWG = book.bind(inwings);
const bookIN = book.bind(airIndia);
bookSW(652, 'Dizzie');
bookIN(999, 'Smoky');
console.log(swiss);
console.log(bookWG);
console.log(airIndia);

const bookSW23 = book.bind(swiss, 23);
bookSW23('Jack');
bookSW23('Selchan');

// With Event Listeners
airIndia.planes = 300;
airIndia.buyPlane = function() {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};
// airIndia.buyPlane();

document.querySelector('.buy').addEventListener('click', airIndia.buyPlane.bind(airIndia));


// Final Example 
// Partial Application: Means we can preset parameters.
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));   // 220  // rate = 10%

const addGST = addTax.bind(null, 0.23);   // This is same as below
// const addGST = value => value + value * 0.23;   
console.log(addGST(200));


// Challenge: Do the Partial Application by function returning another function
const addTax1 = function(rate) {
    return function(value) {
        console.log(value + value * rate);
    }   
}
const addGST1 = addTax1(0.2);
addGST1(100);
addGST1(200);