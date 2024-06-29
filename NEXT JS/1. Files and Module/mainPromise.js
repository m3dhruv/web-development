import fs from "fs/Promises"

let a = await fs.readFile("d.txt")
let b = await fs.appendFile("d.txt", "\n amazing promise")

console.log(a.toString(), b);