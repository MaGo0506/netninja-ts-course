//--------------------
// extending type aliases
//--------------------

type Person = {
    id: string | number
    firstName: string
}

type User = Person & {
    email: string
}

const personOne: Person = {
    id: 1,
    firstName: 'Luffy',
}

const personTwo: User = {
    id: '2',
    firstName: 'Zoro',
    email: 'zoro@email.dev'
}

const personThree = {
    email: 'nami@pirate.net'
}

function printUser(user: User) {
    console.log(user.id, user.email, user.firstName);
}

// printUser(personOne)
printUser(personTwo)
// printUser(personThree)