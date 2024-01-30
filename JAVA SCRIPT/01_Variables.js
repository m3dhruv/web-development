let a = 69; // let can be updated but not re-declared
console.log(a);

var x = 90; // avoid var  // var can be updated and re-declared within its scope
console.log(x);

a = "dhruv";
console.log(a);

// var 4dhruv = 3    // not allowed this will throw an arror
// var let = 5       // not allowed this will throw an arror


let c = undefined;
let d = null;

const tony = "iron man"; // const can neither be updated nor re-declared
console.log(tony);
