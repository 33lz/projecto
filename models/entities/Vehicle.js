class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    getDetails() {
        console.log(`Marca: ${this.brand}, Modelo: ${this.model}`);
    }
}

module.exports = Vehicle