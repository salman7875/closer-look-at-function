
// Function returning another function
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

// This greeter will become function 
const greeter =  greet('Hey!'); 
greeter('Doctor');   // Hey! Doctor
greeter('Scout');    // Hey! Scout