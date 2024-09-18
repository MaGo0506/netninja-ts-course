"use strict";
//--------------------
// classes 101
//--------------------
class Pizza {
    constructor(title, price) {
        this.base = 'classic';
        this.toppings = [];
        this.title = title;
        this.price = price;
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
const pizza = new Pizza('luffy special', 15);
pizza.addTopping('mushrooms');
pizza.addTopping('peperoni');
pizza.addTopping('cheese');
pizza.selectBase('thick');
console.log(pizza);
