function sum(a, b, c = 3) {
    return a + b + c;
}

result1 = sum(5, 7);
result2 = sum(8, 3);
result3 = sum(1, 6, 3);

console.log("The sum of this number is : ", result1);
console.log("The sum of this number is : ", result2);
console.log("The sum of this number is : ", result3);

// ARROW FUNCTION
const func1 = (x)=> {
    console.log("i am an arrow function ", x);
}

func1(34);
func1(55);
func1(90);