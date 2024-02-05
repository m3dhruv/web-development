let a = prompt("enter the first number")
let b = prompt("enter the second number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("sorry, this is not allowed")
}

let sum = parseInt(a) + parseInt(b);
console.log("the sum is ",sum);

// try {
//     console.log("the sum is ",sum*x);
// } catch (error) {
//     console.log("Error !!!");
// }
