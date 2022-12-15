'use strict';

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below 

Here you your tasks: 

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things: 
    1.1: Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: Javascript
        1: Python
        2: Rust
        3: C++
         (Write option number)

    1.2: Based on the input number, update the answers array. for example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense(e.g answer 52 wouldn't make sense right?)

2. Call this method whenever the user clicks the "Answer poll" button.

3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type') which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If the type is 'string' display a string like "Poll results are 13, 2, 4, 1".

4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what should the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

*/

const answerPoll = document.querySelector('.poll');

const poll = {
    question: 'What is your favourite programmin language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section
    answers: new Array(4).fill(0),
    // 1.
    registerNewAnswer: function() {
        // Getting Answer
        const getAnswer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n (Write Option Number)`));

        // Register Answer - By using SHORT CIRCUITING
        typeof getAnswer === 'number' && getAnswer < this.answers.length && this.answers[getAnswer]++
        
        // Register Answer - By using if else statement
        // if (getAnswer === 0) {
        //     this.answers[getAnswer]++;
        // } else if (getAnswer === 1) {
        //     this.answers[getAnswer]++;
        // } else if (getAnswer === 2) {
        //     this.answers[getAnswer]++;
        // } else if (getAnswer === 3) {
        //     this.answers[getAnswer]++;
        // } 

        // 4.
        this.displayResults(); 
        this.displayResults('string'); 
    },
    // 3.
    displayResults: function(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            // "Poll results are 13, 2, 4, 1"
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    },
};


// 2.
answerPoll.addEventListener('click', poll.registerNewAnswer.bind(poll));

// Bonus
poll.displayResults.call({ answers: [5, 2, 3] });  //  [5, 2, 3]
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');  // Poll results are 5, 2, 3

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });  // [1, 5, 3, 9, 6, 1]
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string'); // Poll results are 1, 5, 3, 9, 6, 1f