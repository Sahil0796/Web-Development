
// IMPORTANT PROMISE TERMS. !
// 1. SETTLE MEANS RESOLVE OR REJECT.
// 2. RESOLVE MEANS PROMISE HAS SETTLED SUCCESSFULLY.
// 3. REJECT MEANS PROMISE HAS NOT SETTLED SUCCESSFULLY. 
// 4.  

// let prom1 = new Promise((resolve, reject) => {
//     resolve("Sahil, This is resolved !")
//     reject("The promise rejected !")
// })


// prom1.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// }
// )


// ASYNC $ AWAIT ARE THE SPECIAL SYNTAX TO WORK WITH PROMISES IN JAVASCRIPT !


// async function getdata() {
//     // Simulate getting data from a Server.
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 4000);
//     })
// }

async function getdata() {
    // FETCH API.
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')    
    let data = await x.json()                                            // Raw Data Parses as JSON into data variable.
    console.log(data)
    return data
}

async function main() {
    console.log("this it it ! ");

    console.log("as it was ! ");

    let data = await getdata();              // Await can only be used in an Async function. !

    console.log(data);

    console.log("this it it ! ");

    console.log("as it was ! ");
}

main();



// data.then((v) => {

//     console.log(data);

//     console.log("process data");

//     console.log("task 2");
// })



