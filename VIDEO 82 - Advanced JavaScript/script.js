
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



// DESTRUCTURING !

// Destructuring is assignment is used to unpack values from an array, or properties from objects into distinct variables.


(async function main() {

    let [x, y] = [10, 20, 30];
    console.log(x, y);
    
   })()



