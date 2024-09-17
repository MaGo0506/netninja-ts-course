//--------------------
// extending interfaces
//--------------------

interface HasFormatter {
    format(): string
}

interface Bill extends HasFormatter {
    id: string | number
    amount: number
    server: string
}

const user = {
    id: 1,
    format(): string {
        return `this user has an id of ${this.id}`
    }
}

const bill = {
    id: 2,
    amount:  50,
    server: 'Luffy',
    format(): string {
        return `Bill with id ${this.id} had ${this.amount}$ to pay`
    }
}

function printFormated(val: HasFormatter):  void {
    console.log(val.format());
}

function printBill(bill: Bill):  void {
    console.log('server:', bill.server);
    console.log(bill.format());
}

printFormated(user)
printFormated(bill)

// printBill(user)
printBill(bill)