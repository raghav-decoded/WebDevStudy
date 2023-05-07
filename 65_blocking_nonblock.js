// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire
// a callback is not fired until the function completes it job, following lines keep executing

const fs = require("fs");
// Callback fires after readFile reads file
fs.readFile("/Users/raghavsingh/Documents/Web_Dev_Study/NODEJS/64_module.txt", "utf-8", (err, data)=>{
    console.log(data);
});
console.log("This is a message");
