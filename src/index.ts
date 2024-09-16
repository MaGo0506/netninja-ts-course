//--------
// arrays
//--------

let names: string[] = ['Luffy', 'Zoro', 'Usopp'];
let ages: number[] = [17, 19, 17];

names.push('Nami')
ages.push(18)

let multi: (string | number | boolean)[] = [1, true, 'hello']

const m: string | number | boolean = multi[0];


//----------------------------
// type inference with arrays
//----------------------------

let fruits = ['gum-gum', 'flower-flower', 'ice-ice', 'human-human'];

fruits.push('revive-revive')

const f = fruits[3]

console.log(f);

let things: (string | number | boolean)[] = [1, true, 'hello']

const t: string | number | boolean = things[0];


//-----------------
// object literals
//-----------------

const user: {firstName: string, age: number, id: number} = {
    firstName: 'Luffy',
    age: 17,
    id: 1
};

user.firstName = 'Zoro'
user.id = 2

//----------------------------
// type inference object literals
//----------------------------

let person = {
    name: 'Luffy',
    score: 35
}

person.name = 'Franky'
person.score = 40

const score = person.score
