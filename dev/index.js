"use strict";
//--------------------
// classes 101
//--------------------
class Pizza {
    constructor(title, price) {
        this.title = title;
        this.price = price;
        this.base = 'classic';
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(base) {
        this.base = base;
    }
}
const pizzaOne = new Pizza('luffy special', 15);
const pizzaTwo = new Pizza('zoro special', 10);
function addMushroomsToPizzas(pizzas) {
    for (const p of pizzas) {
        p.addTopping('mushrooms');
    }
}
addMushroomsToPizzas([pizzaOne, pizzaTwo]);
console.log(pizzaOne, pizzaTwo);
