"use strict";
//----------
// any type
//----------
let age;
let title;
age = 30;
age = '30';
title = 25;
title = {
    hello: 'world'
};
//--------------------
// any type in arrays
//--------------------
let things = ['test', 24, false, null];
things.push({ id: 123 });
//-----------------
// functions & any
//-----------------
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether('hello');
const resultTwo = addTogether(3);
console.log(resultOne, resultTwo);
// useful when migrating from js to ts
// because using any won't cause errors initially
