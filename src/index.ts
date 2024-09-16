//----------
// type aliases
//----------

// example 1 - touples

type Rgb = [number, number, number]

function getRandomColor(): Rgb {
    const r: number = Math.floor(Math.random() * 255);
    const g: number = Math.floor(Math.random() * 255);
    const b: number = Math.floor(Math.random() * 255);

    return [r, g, b];
}

const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);


// example 2 - object literal

type User = {
    name: string
    score: number
}

const userOne: User = {
    name: 'Luffy',
    score: 25
}

function formatUser(user: User): void {
    console.log(`${user.name}: ${user.score}`);
}

formatUser(userOne);
formatUser({name: 'Zoro', score: 24});