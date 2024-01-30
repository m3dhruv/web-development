console.log("i am a tutorial o loops");

// let a = 1;
// console.log(a);
// console.log(a + 1);
// console.log(a + 2);

// FOR LOOP
console.log("FOR LOOP");
let a = 1;
for (let i = 0; i < 10; i++) {
  console.log(a + i);
}

// FOR IN LOOP
console.log("FOR IN LOOP");
let obj = {
  name: "iron man",
  role: "actor",
  company: "marval",
};

for (const key in obj) {
  console.log(key);
}

// FOR OF LOOP
console.log("FOR OF LOOP");
for (const c of "SPIDERMAN") {
  console.log(c);
}

// WHILE LOOP
console.log("WHILE LOOP");
let item = 1;
while (item <= 5) {
  console.log(item);
  item++;
}

// DO WHILE LOOP 
console.log("DO WHILE LOOP");
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);
