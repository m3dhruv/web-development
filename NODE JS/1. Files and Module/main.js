const fs = require("fs")
//const fs = require("fs/promises")

console.log("Starting");

//fs.writeFileSync("d.txt", "Hulk is a super hero")

fs.writeFile("a.txt", "Thor is a super hero ",()=>{
    console.log("Done");
    fs.readFile("a.txt", (error, data)=>{
        console.log(error, data.toString());
    })
});

fs.appendFile("a.txt", "and Thor is a marval character",(e, d)=>{
    console.log(d);
})

console.log("Ending");