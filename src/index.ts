//--------------------
// function signatures
//--------------------

type Calculator = (numOne: number, numTwo: number) => number

function addTwoNumbers(a: number, b: number) {
    return a + b;
}
function multiplyTwoNumbers(first: number, second: number) {
    return first * second;
}
function squareNumber(num: number) {
	return num * num
}
function joinTwoNumbers(numOne: number, numTwo: number) {
	return `${numOne}${numTwo}`
}

let calcs: Calculator[] = []

calcs.push(addTwoNumbers)
calcs.push(multiplyTwoNumbers)
// calcs.push(joinTwoNumbers) ---> not allowed //
calcs.push(squareNumber)

//------------------------------
// function signatures on interfaces
//------------------------------

interface HasArea {
    name: string,
    // calcArea: (a: number) => number ---> one way
    calcArea(a: number): number // -------> other way
}

const shapeOne: HasArea = {
    name: 'square',
    calcArea(l: number) {
        return l * l
    }
}

const shapeTwo: HasArea = {
    name: 'circle',
    calcArea(r: number) {
        return (Math.PI * r ^ 2)
    }
}

shapeOne.calcArea(5)
shapeTwo.calcArea(10)