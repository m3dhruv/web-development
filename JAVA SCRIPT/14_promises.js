let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();

  if (a < 0.5) {
    reject("Error");
  } 
  else {
    setTimeout(() => {
      console.log("Yes I am done");
      resolve("Dhruv");
    }, 3000);
  }
});

prom1.then((a) => {
  console.log(a);
}).catch((err)=>{
    console.log(err);
})
