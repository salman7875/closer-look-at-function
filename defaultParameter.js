'use strict';

const bookings = [];

const createBooking = function(fligtNum, numPassenger = 1, price = 199 * numPassenger) {

    // ES5
    // numPassenger = numPassenger || 1;
    // price = price || 199;

    const booking = {
        fligtNum,
        numPassenger,
        price,
    }
    console.log(booking);
    bookings.push(booking);
}
createBooking('LH123');
createBooking('LH123', 2, 849);
createBooking('LH123', 4);
createBooking('LH123', 8);
createBooking('LH123', undefined,389);  // Skipping 2 parameter

// How Passing Arguments Works_Value vs Reference

const flight = 'LH234';
const doctor = {
    name: 'Doctor',
    passport: 85218767981,
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 85218767981) {
        console.log('Check In');
    } else {
        console.log('Wrong Passport');
    }
}
checkIn(flight, doctor);
console.log(flight);
console.log(doctor);

const newPassport = function(person) {
    person.passport = Math.floor(Math.random() * 100000000);
}

newPassport(doctor);
checkIn(flight, doctor);