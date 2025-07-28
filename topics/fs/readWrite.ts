import fs from "fs";
fs.writeFileSync("demo.txt", "Hello Node");
console.log(fs.readFileSync("demo.txt", "utf8"));
