// let obj = {
//     a: 1,
//     b: "Sahil"
// }
// console.log(obj);

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// If you want to add any property in an Object, you can do it by help of prototype.

// rabbit.__proto__ = animal;   // Sets rabbit.[[Prototype]] = animal 



// Object Oriented Programming !

class Animal {
    constructor(name) {                           // Constructor() method is called automatically by new, so we can initialize the object there. 
        this.name = name
        console.log("Object is created.......!");
    }

    eats() {
        console.log("I am Eating !");
    }

    jumps() {
        console.log("I am Jumping !");
    }
}



class Lion extends Animal {                   // Class Inheritance is a way for one class to extend another class. This is done by using extends keyword.
    constructor(name) {
        super(name)
        console.log("Object is created....... and All set !");
    }

    eats() {
        console.log("I am Eating and Drinking !");
    }
}


let a = new Animal("Owl");    //  This is how you can create an object of a class.    
console.log(a);

let b = new Lion("Babbar");
console.log(b);


console.log(typeof a);

console.log(typeof b);

