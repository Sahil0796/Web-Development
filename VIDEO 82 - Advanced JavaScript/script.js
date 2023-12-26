
async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(50)
        }, 1000);
    })

}



// IIFE ( JavaScript Immediately Invoked Function Expressions ) is a JavaScript Function that runs as soon as it is initialized.

//  (function(){
    //    _ _ _ _ _
       //  })();


    //    (async function main() {

    //     // let a = await sleep()
    //     // console.log(a);
        
    //     // let b = await sleep()
    //     // console.log(b);

    //    })()



// DESTRUCTURING ! + ...rest operator !

// Destructuring is assignment is used to unpack values from an array, or properties from objects into distinct variables.


// (async function main() {

//     let [x, y, ...rest] = [10, 20, 30, 40, 50, 60, 70];
//     console.log(x, y, rest);
    
//    })()


(async function main() {

    let obj = {
        a : 1,
        b : 2,
        c : 3
    }

    let {a, b, c} = obj
    console.log(a, b, c); 
   })()


// SPREAD OPERATOR

   sum = (a, b, c) =>{
        return a+b+c
   }

   let arr = [10, 20, 30]
   console.log(sum(arr[0], arr[1], arr[2]));
   console.log(sum(...arr));
   
   
function show (){
    // let z = 100;    // Local to the function.
    console.log(z);
    
}

let z = 110;          // Global to everyone.

show()

console.log(z);



// HOISTING !
// Only works with VAR declaration.

// Hoisting refers to the process whereby the interpreter appears to move the declarations to the top of the code before execution. 
// Variables can thus be referenced before they are declared in JavaScript.











