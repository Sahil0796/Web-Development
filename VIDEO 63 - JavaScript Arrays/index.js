// Arrays are variables which can hold more than one values. It can also keep data of different data types.

// Arrays are mutable. You can change the values of the original array.

// In JavaScript, Arrays are objects. The typeof operator on arrays returns as object.

const fruits = ["banana", "apple", "grapes", "strawberry", "pineapple"];

const a = [7, "Tony", false];

// index = 0, 1, 2, 3, 4, 5
let arr = [1, 2, 3, 4, 5, 7];

arr[4] = 77;
console.log(arr);
console.log(arr.length);
console.log(arr[5]);
console.log(arr[4]);
console.log(typeof arr);



// ARRAY METHODS !  

// 1.  toString()  
// Converts an array to a string of comma separated values. 

console.log(arr.toString());


// 2.  join()
// Joins all the array elements using a separator.

console.log(arr.join(" phir "));


// 3.  pop()
// Removes last element from the array.

console.log(arr.pop());
console.log(arr);


// 4.  push()
// Adds a new element at the end of the array.

console.log(arr.push(7));
console.log(arr);
console.log(arr.push("Sahil"));
console.log(arr);


// 5.  shift()
// Removes first element and returns it.

console.log(arr.shift());
console.log(arr);


// 6. Unshift()
// Adds element to the beginning and Returns new array length.

console.log(arr.unshift("Bhandari"));
console.log(arr);


// 7.  Delete
// Array elements can be deleted using the delete operator.

delete arr[4];
console.log(arr);


// 7.  Concat()
// Used to join arrays to the given array. Returns a new array but does not change existing arrays.

let z = [1, 2, 3, 4, 5];
let b = [10, 20, 30, 40, 50];
let c = [11, 22, 33, 44, 55];
z.concat(b, c);
console.log(z);


// 8.  Sort()
// Sort method is used to sort an array alphabetically.

fruits.sort();
console.log(fruits);


// 9.  Splice()
// Splice can be used to add new items to an array to a particular place.

let num = [1, 2, 3, 4, 5];
  
num.splice(1, 2);
console.log(num);

num.splice(1, 2, 77, 70);
console.log(num);


// 10.  Slice()
// Slices out a piece from an array. It creates a new array.

const num2 = [1, 2, 3, 4, 5];
num2.slice(2);
console.log(num2);

num2.slice(1, 3);  // Including 1 and excluding 3.
console.log(num2);


// 11. Reverse()
// Reverse elements in the source array.

arr.reverse();
console.log(arr);





























