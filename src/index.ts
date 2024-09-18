//--------------------
// classes 101
//--------------------

type Base = 'classic' | 'thick' | 'thin' | 'garlic'

class Pizza {
    constructor(private title: string, private price: number) {}
    
    private base: Base = 'classic'
    private toppings: string[] = []

    addTopping(topping: string): void {
        this.toppings.push(topping);
    }
    removeTopping(topping: string): void {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(base: Base): void {
        this.base = base
    }
}

const pizza = new Pizza('luffy special', 15);

pizza.addTopping('mushrooms')
pizza.addTopping('peperoni')
pizza.addTopping('cheese')
pizza.selectBase('thick')


console.log(pizza);
