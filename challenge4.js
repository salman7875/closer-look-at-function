'use strict';

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.addEventListener('click', function(e) {
        e.preventDefault();

        header.style.color = 'blue';
    });
})();