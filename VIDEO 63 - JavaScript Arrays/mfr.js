// Important Concepts !

// 1.  map()
// Creates a new array by performing some operation on each array element.

const x = [10, 20, 30, 40, 50];
// let newArr = [];

// for (let index = 0; index < x.length; index++) {
//     const element = x[index];
//     newArr.push(element**2) 
// }

let newArr = x.map((e, index, arr)=>{
    return e**2
})
console.log(newArr);


// 2.  filter()
// Filters an array with values that passes a test. Creates a new array.

const greaterThanSeven = (e) =>{
    if(e>1000){
        return true
    }
    return false
}

console.log(newArr.filter(greaterThanSeven));


// 3.  reduce method
// Reduces an array to a single value.

const n = [10, 80, 70, 110];

const red = (a, b) => {
    return a+b
}

console.log(n.reduce(red));


// 4.  Array from
// Used to create an array from any other object.

Array.from("Sahil");
console.log(y);
