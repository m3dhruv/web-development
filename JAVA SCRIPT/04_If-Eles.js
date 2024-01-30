let age = 12;

if (age<0) {
    console.log("Tis is an invalid age");
}
else if (age<9) {
    console.log("You are a kid and you cannot even think of driving");
}
else if (age<18 && age>=9) {
    console.log("You are a kid and you can think of driving after 18");
} 
else {
    console.log("You can now drive as you are above 18");
}
console.log("done");
console.log("You can", (age<18? "not drive" : "drive"));