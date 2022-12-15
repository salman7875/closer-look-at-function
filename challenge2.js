'use strict';

/*
This is more of a thinking challenge than a coding challenge.

Take the IIFE below and at the end of the function, attack an even listener that changes the color of the selected h1 element ('header') to blue, each time
the BODY element is clicked. DO NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) Why this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
*/

(function() {
    const header = document.querySelector('h1');
    header.style.color = 'red'; 
    document.addEventListener('click', function() {
        header.style.color = 'blue'
    })
})();