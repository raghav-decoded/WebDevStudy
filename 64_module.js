const fs = require("fs");
let text = fs.readFileSync("/Users/raghavsingh/Documents/Web_Dev_Study/NODEJS/64_module.txt", "utf-8");
text = text.replace("Raghav", "Rocky");

console.log("The content of the file is")
console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("/Users/raghavsingh/Documents/Web_Dev_Study/NODEJS/64_module_write.txt", text);
