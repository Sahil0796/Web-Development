// PROMISE
// THE SOLUTION TO THE CALLBACK HELL IS PROMISES. A PROMISE IS S A "PROMISE OF CODE EXECUTION". THE CODE EITHER EXECUTES OR FAILS, IN BOTH THE CASES
// THE SUBSCRIBER WILL BE NOTIFIED.


console.log('This is a promise !');


let conn = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No ! The random number was not less then a !")
    } else {
        setTimeout(() => {
            console.log('This Promise is running successfully !');
            resolve("Sahil !")
        }, 5000);
    }
})

let conn2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No ! The random number was not less then a 2 !")
    } else {
        setTimeout(() => {
            console.log('This Promise is running successfully 2 !');
            resolve("Sahil 2 !")
        }, 1000);
    }
})

// conn.then((a) => {
//     console.log(a);
// }).catch((err) => {
//   console.log(err);

// }
// )


// STATIC METHODS OF PROMISE. 


// 1. PROMISE.ALL : WAITS FOR ALL PROMISES TO RESOLVE AND RETURNS THE ARRAY OF THEIR RESULTS. IF ANY ONE FAILS, IT BECOMES THE ERROR & ALL OTHER RESULTS ARE IGNORED.

// let p3 = Promise.all([conn, conn2])

// p3.then((a) => {
//   console.log(a);
//   }).catch((err) => {
//     console.log(err);
//   })


// 2. PROMISE.SETTLED : WAITS FOR ALL PROMISES TO SETTLE AND RETURNS THEIR RESULTS AS AN ARRAY OF OBJECTS WITH STATUS AND VALUE.

// let p3 = Promise.allSettled([conn, conn2])

// p3.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// })


// 3. PROMISE.RACE : WAITS FOR THE FIRST PROMISE TO SETTLE AND ITS RESULT/ERROR BECOMES THE OUTCOME.

let p3 = Promise.race([conn, conn2])

p3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})


// 4. PROMISE.ANY : WAITS FOR THE FIRST PROMISE TO FULFILL( & NOT REJECTED ), AND ITS RESULT BECOMES THE OUTCOME. THROWS AGGREGATE ERROR IF ALL THE PROMISES ARE REJECTED.


// 5. PROMISE.RESOLVE : MAKES A RESOLVED PROMISE WITH THE GIVEN VALUE.


// 6. PROMISE.REJECT : MAKES A REJECTED PROMISE WITH THE GIVEN ERROR.










