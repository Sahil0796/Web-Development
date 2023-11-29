
 console.log("This is a tutorial on loops !");


/* 
LOOPS !

1. for loop. - loop a block of code number of times.
2. for in loop. - loops through the keys of an object.
3. for of loop. - loops through the values of an object.
4. while loop. - loops a block based on a specific condition.
5. do-while loop. - while loop variant which returns atleast once.

*/

// FOR LOOP !

// let a = 1;

for(i=0; i<100; i++){
    console.log(i);
}


// FOR IN LOOP !

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


// 