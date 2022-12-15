'use strict';

const airIndia = {
    airline: 'Air India',
    iataCode: 'AI',
    bookings: [],
    book: function(flightnum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightnum}`);
        this.bookings.push({ name, flight: `${this.iataCode}${flightnum}` });
    }
}
airIndia.book(234, 'doctor');
airIndia.book(349, 'Ninja');
console.log(airIndia);

const kingfisher = {
    airline: 'Kingfisher',
    iataCode: 'KG',
    bookings: [],
}

// Copying book Method from airIndia
const book = airIndia.book;

// book(12, 'Drake')  // This does NOT work

// Call and Apply Method
book.call(kingfisher, 123, 'Drake');
console.log(kingfisher);

book.call(airIndia, 121, 'Sparrow');
console.log(airIndia);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'SW',
    bookings: [],
}

book.call(swiss, 979, 'John');
console.log(swiss);

const flightData = [231, 'Jerry'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(kingfisher, ...flightData);
console.log(kingfisher);

console.log('------------- BIND ---------------');

const bookKG = book.bind(kingfisher);
const bookAI = book.bind(airIndia);
const bookSW = book.bind(swiss);
bookKG(23, 'Kris');
console.log(kingfisher);

const bookSW23 = book.bind(swiss, 23);
bookSW23('Zing khan'); 

// With Event Listener
airIndia.planes = 300;
airIndia.buyPlanes = function() {
    console.log(this);

    this.planes++;
    console.log(this.planes);
}
// airIndia.buyPlanes();
document.querySelector('.buy').addEventListener('click', airIndia.buyPlanes.bind(airIndia));

const addTax = (rate) => (value) => console.log(value + value * rate);
const addGST = addTax(0.23);
addGST(100);