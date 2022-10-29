// const { date } = require("../../../FL19_HW9/homework/js/var");

class Toy {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getToyInfo() {
        return `The toy name is ${this.name}. It costs ${this.price} dollars.`
    }
}

class Teddy extends Toy {
    constructor(name, price) {
        super(name, price);
        this.material = 'cotton';
    }
    getMaterialInfo() {
        return `The toy ${this.name} was made of ${this.material}.`
    }
}

class Wooden extends Toy {
    constructor(name, price) {
        super(name, price);
        this.material = 'wood';
    }
    getMaterialInfo() {
        return `The toy ${this.name} was made of ${this.material}.`
    }
}
class Plastic extends Toy {
    constructor(name, price) {
        super(name, price);
        this.material = 'plastic';
    }
    getMaterialInfo() {
        return `The toy ${this.name} was made of ${this.material}.`
    }
}
class Factory {
    constructor(type) {
        this.names = [];   
        this.type = type
        this.produce = (name, price, type) => {
            let unicToy = this.getname(name);
            if (unicToy) {
                return unicToy;
            } else {
               let newToy = () => {
                    switch (type) {
                        case 'teddy': return new Teddy(name, price);
                        case 'wooden':
                            if (typeof Factory.instance === 'object') {
                                return Factory.instance;
                            }
                            Factory.instance = new Wooden(name, price);
                            return Factory.instance;
                        default: return new Plastic(name, price);
                    }
                }
                this.names.push(newToy());
                return newToy();
            }
        } 
    }         
    getname(name){
        return this.names.find((el) => el.name === name);
    }
}


let factory = new Factory();
/* eslint-disable no-magic-numbers */
const tedyBear = factory.produce('Bear', 200, 'teddy');
console.log(tedyBear);
console.log(tedyBear.getToyInfo());
console.log(tedyBear.getMaterialInfo());
const plasticCar = factory.produce('Car', 200);
console.log(plasticCar);
console.log(plasticCar.getToyInfo());
console.log(plasticCar.getMaterialInfo());
const plasticBear = factory.produce('Bear', 500, 'plastic');
console.log(plasticBear);
console.log(plasticBear.getToyInfo());
console.log(plasticBear.getMaterialInfo());
const woodenHorse = factory.produce('Horse', 200, 'wooden');
console.log(woodenHorse);
console.log(woodenHorse.getToyInfo());
console.log(woodenHorse.getMaterialInfo());
const woodenMorse = factory.produce('Morse', 300, 'wooden');
console.log(woodenMorse);
console.log(woodenMorse.getToyInfo());
console.log(woodenMorse.getMaterialInfo());


class Car {
    constructor(carname, carhost) {
        this.carname = carname;
        this.carhost = carhost;
    }
    carsound() {
        return `${this.carname} Usual car sound.`;
    }
}

class AmbulanceCar {
    constructor(car) {
        this.car = car;
    }
    ambulanceSound() {
        return `${this.car.carname} Siren sound`
    }
}

const mercedes = new Car('Mercedes', 'Doctor');
console.log(mercedes.carsound());
const ambulanceMercedes = new AmbulanceCar(mercedes);
console.log(ambulanceMercedes.ambulanceSound());
const toyota = new Car('Toyota', 'Doctor2');
console.log(toyota.carsound());
const ambulanceToyota = new AmbulanceCar(toyota);
console.log(ambulanceToyota.ambulanceSound());

