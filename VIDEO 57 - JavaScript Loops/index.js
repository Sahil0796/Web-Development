
 console.log("This is a tutorial on loops !");


/* 
LOOPS !

1. for loop.        -     Loop a block of code number of times.
2. for in loop.     -     Loops through the keys of an object.
3. for of loop.     -     Iterate data structures like arrays and strings.
4. while loop.      -     Loops a block based on a specific condition.
5. do-while loop.   -     While loop variant which returns atleast once.

*/

// FOR LOOP !  -  This is a basic loop.

let a = 1;

for(i=0; i<100; i++){
    console.log(i);
}



// FOR IN LOOP !  -  This loop will work with objects.

let obj = {
    name: "Tony",
    role: "Programmer",
    company: "Marshall"
}

for (const key in obj) {

        const element = obj[key];
        console.log(element);  
}



// FOR OF LOOP !  -  Iterate data structures like arrays and strings.

for (const s of "Sahil") {
    console.log(s);
}



// WHILE LOOP !  -  While loop will check the condition first.

let s = 10;

while (s<11) {
    console.log(s)
    s++;
}



// DO - WHILE LOOP !  -  This loop will run atleast one time.

let b = 10;
do {
    console.log(b)
    b++;
} while (b<5);


