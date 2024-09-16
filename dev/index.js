"use strict";
//----------
// union types
//----------
let someId;
someId = 10;
someId = '12';
let email;
email = null;
email = 'luffy@gmail.com';
let anotherId;
anotherId = '13124asfasga';
anotherId = 5123;
//----------
// union type pitfall
//----------
function swapIdType(id) {
    // can only use props and methods common to
    // both number and string types
    // parseInt(id) ---> not allowed
    return id;
}
swapIdType('5');
