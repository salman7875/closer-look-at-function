'use strict';

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer: function() {
        // GET ANSWER
        const getAnswer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n (Write Option Number)`));

        // CHECK ANSWER WITH SHORT CIRCUITING
        typeof getAnswer === 'number' && getAnswer < this.answers.length && this.answers[getAnswer]++;

        this.displayResults();
        this.displayResults('string');
    },
    displayResults: function(type = 'array') {
        if (type === 'array') console.log(this.answers);
        else if (type === 'string') console.log(`Poll results are ${this.answers.join(', ')}`);
    },
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] })
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1]}, 'string');