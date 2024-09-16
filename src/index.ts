//----------
// union types
//----------

let someId: number | string;
someId = 10;
someId = '12';

let email: string | null;
email = null;
email = 'luffy@gmail.com';

type Id = number |  string;
let anotherId: Id;

anotherId = '13124asfasga'
anotherId = 5123

//----------
// union type pitfall
//----------

function swapIdType(id: Id): Id {
    // can only use props and methods common to
    // both number and string types
    // parseInt(id) ---> not allowed

    return id
}

swapIdType('5');