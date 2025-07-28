import fs from "fs";
const stream = fs.createReadStream("./largeFile.txt");
stream.on("data", (chunk) => console.log(chunk.toString()));
