// PROMISE
// THE SOLUTION TO THE CALLBACK HELL IS PROMISES. A PROMISE IS S A "PROMISE OF CODE EXECUTION". THE CODE EITHER EXECUTES OR FAILS, IN BOTH THE CASES
// THE SUBSCRIBER WILL BE NOTIFIED.


console.log('This is a promise !');


let conn = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No ! The random number was not less then a !")
    }else{
        setTimeout(() => {
            console.log('This Promise is running successfully !');
            resolve("Sahil !")
        }, 2000);
    }
    })
    

conn.then((a) => {
    console.log(a);
}).catch((err) => {
  console.log(err);
  
}
)





