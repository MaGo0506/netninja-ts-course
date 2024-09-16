"use strict";
//--------
// functions
//--------
function addTwoNumbers(a, b) {
    return a + b;
}
;
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
addTwoNumbers(2, 7);
subtractTwoNumbers(20, 15);
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
    return total;
}
addAllNumbers([5, 7, 9, 11, 3, 5, 1]);
//--------
// return type inference
//--------
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const results = formatGreeting('Luffy', 'hello');
console.log(results);
