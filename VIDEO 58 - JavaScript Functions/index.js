
// FUNCTION IS A BLOCK OF CODE THAT CAN BE USED AGAIN AND AGAIN.

function nice(name) {
    console.log("Hey ! " + name + " How are you !");
    console.log("Hey ! " + name + " How you doing !");
    console.log("Hey ! " + name + " What's up !");
    console.log("Hey ! " + name + " What's going on !");
}

// nice("Sahil");

function sum(a, b, c=10) {      // c is a default parameter value of the function.
    // console.log(a + b);
    return a + b + c;          // The JavaScript return statement is used to return a particular value from the function.
}

result1 = sum(15, 5);
result2 = sum(1, 5);
result3 = sum(5, 50, 20);
result4 = sum(5, 51, 10);

console.log("The sum of your number is: ", result1);
console.log("The sum of your number is: ", result2);
console.log("The sum of your number is: ", result3);
console.log("The sum of your number is: ", result4);



// ARROW FUNCTION !

const func1 = (s) => {
    console.log("I am an arrow function ", s);
}

func1(10);
func1(20);
func1(30);




