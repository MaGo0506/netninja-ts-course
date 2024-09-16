//--------
// functions
//--------

function addTwoNumbers(a: number, b: number): number {
    return a + b;
};

const subtractTwoNumbers = (a: number, b: number): number => {
    return a - b;
};
 
addTwoNumbers(2, 7);
subtractTwoNumbers(20, 15);

function addAllNumbers(items: number[]): number {
    const total = items.reduce((a, c) => a + c, 0)
    console.log(total)

    return total;
}

addAllNumbers([5, 7, 9, 11, 3, 5, 1])

//--------
// return type inference
//--------

function formatGreeting(name: string, greeting: string) {
    return `${greeting}, ${name}`;
}

const results = formatGreeting('Luffy', 'hello');

console.log(results);

