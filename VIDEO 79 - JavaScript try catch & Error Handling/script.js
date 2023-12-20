
// THROW AN ERROR.

let a = prompt("Enter the first number");      // Prompt return us the String value.
let b = prompt("Enter the second number");

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("This is not allowed, Kindly check !")      // You can add an error as per your requirement. 
}

let sum = parseInt(a) + parseInt(b);           // To get the result in an integer value when using prompt, use parseint().




// TRY & CATCH ERROR.

function main(){
        x = 1;
    try {
        console.log("This is the total of your numbers", sum*x );
        return true

    } catch (error) {
        console.log("Now this is an error !");
        return false

    }finally{      
        console.log("Files are being closed and DB connection is closed now !");      // FINALLY CLAUSE will run your code after return in a function.
    }   
}

let c = main()
    






