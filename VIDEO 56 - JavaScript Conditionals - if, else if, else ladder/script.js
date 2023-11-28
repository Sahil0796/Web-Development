
console.log("JavaScript Conditionals: if, else if, else ladder !");


let age = 16;
let grace = 2;
let old = 20;

console.log(age + grace);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age ** grace);   // Exponentiation Operater.
console.log(age % grace);    // Modulus.


// if((age + grace)>18){
//     console.log("You can drive !");
// }
// else{
//     console.log("You cannot drive !");
// }


if (old == 20) {
    console.log("You can drive !");
}
else if (old == 21) {
    console.log("You cannot drive !");
}
else {
    console.log("You can drive someday !");
}


// COMPARISON OPERATORS !

// Nodejs REPL (READ - EVALUATE - PRINT - LOOP).

/* 
Equal to  ==
Not Equal to  !=
Equal Value and Type  ===
Not Equal value or Not Equal Type  !==
Greater than  >
Less than  <
Greater than or Equal  >=
Lesser than or Equal  <=
Ternary Operator  ?
*/

// LOGICAL OPERATORS !

/*
LOGICAL AND - BOTH should be true  && 
LOGICAL OR - One of them should be true   ||
LOGICAL NOT  !
*/


a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);  /* Ternary Operator */
 
/* This means: 
if(a>b){
    let c = a - b;
}
else{
    let c = b - a;
} 
*/

document.write("  ");