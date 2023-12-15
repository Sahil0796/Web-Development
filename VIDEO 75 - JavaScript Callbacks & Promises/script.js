
//  let details = {
//     hair: "black",
//     body: "good",
//     eyes: "brown",
//     shoe_size : 8,
//     height: 5.8
//  }

//  document.write(details.eyes);
//  document.write(details.body);
//  document.write(details.hair);
//  document.write(details.shoe_size);
//  document.write(details.height);



console.log("This will run first !");    // Synchronous Action.
console.log("This will run second !");

setTimeout(() => {
    console.log("This will run at the end !");    // Asynchronous Action.
}, 0);

setTimeout(() => {
    console.log("This will run at the end 2 !");
}, 0);

console.log("This will run at third place due to asynchronous nature of JavaScript !");



//  CALLBACK FUNCTION : A CALLBACK FUNCTION IS A FUNCTION PASSED INTO ANOTHER FUNCTION AS AN ARGUMENT, WHICH IS THEN INVOKED INSIDE THR OUTER FUCNTION
//  TO COMPLETE AN ACTION. We can run that function when we want it to run.


const loadscript = (src, callback) => {
  
}




