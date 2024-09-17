"use strict";
//--------------------
// extending interfaces
//--------------------
const user = {
    id: 1,
    format() {
        return `this user has an id of ${this.id}`;
    }
};
const bill = {
    id: 2,
    amount: 50,
    server: 'Luffy',
    format() {
        return `Bill with id ${this.id} had ${this.amount}$ to pay`;
    }
};
function printFormated(val) {
    console.log(val.format());
}
function printBill(bill) {
    console.log('server:', bill.server);
    console.log(bill.format());
}
printFormated(user);
printFormated(bill);
// printBill(user)
printBill(bill);
