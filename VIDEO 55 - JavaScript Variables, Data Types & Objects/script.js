
// VARIABLES IN JAVASCRIPT ARE CASE SENSITIVE.

// VAR IS GLOBALLY SCOPED WHILE LET AND CONST ARE BLOCK SCOPED.

// VAR CAN BE UPDATED AND RE-DECLARED WITHIN ITS SCOPE. 

// LET CAN BE UPDATED BUT NOT RE-DECLARED.

// CONST NEITHER BE UPDATED OR RE-DECLARED.


 var a = 10;
 var b = 20;
 var c = "This is JavaScript !";


//  document.write(typeof a, typeof b, typeof c);
 document.write(a + b + 10);
 console.log(typeof a, typeof b, typeof c);

 let x = "Tony";
 let y = 20;
 let z = 5.55;
 const m = true;
 let n = undefined;
 let f =null;

 console.log(x, y, z, m, n, f);
 console.log(typeof x, typeof y, typeof z, typeof m, typeof n, typeof f);


// OBJECT !

// AN OBJECT CAN CONTAIN VALUES IN "KEY:VALUE", FUNCTIONS, OBJECTS.

let s = {
    name: "Sahil Bhandari",
    "Job Role:": 7, 
    "is_mad": true
}

console.log(s);

s.salary = "1000 crores"   // Altering the object !

console.log(s);

s.salary = "7000 crores"

console.log(s);
