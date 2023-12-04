// LOOPING THROUGH ARRAYS !

// 1.  for loop
// Classical loop. 

let a = [1, 70, 50, 7, 10, 80];

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}


// 2.  forEach loop
// Calls a function once for each array element.

a.forEach((value, index, arr) => {
    console.log(value, index, arr);
});


// 3.  for in loop
// This loop works with an object.

let obj = {
    a: 1,
    b: 2,
    c: 3
}

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    console.log(key, element);
    }
}


// 4.  for of loop
// This loop works with Arrays and Strings.

for (const value of a) {
    console.log(value)
}





