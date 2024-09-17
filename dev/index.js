"use strict";
//--------------------
// extending type aliases
//--------------------
const personOne = {
    id: 1,
    firstName: 'Luffy',
};
const personTwo = {
    id: '2',
    firstName: 'Zoro',
    email: 'zoro@email.dev'
};
const personThree = {
    email: 'nami@pirate.net'
};
function printUser(user) {
    console.log(user.id, user.email, user.firstName);
}
// printUser(personOne)
printUser(personTwo);
// printUser(personThree)
