console.log("This is module");

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

// Single import
// module.exports = average;

// defining object of items to be imported
// module.exports = {
//     avg: average,
//     name: "Harry",
//     repo: "GitHub"
// }

// module.exports is an object
module.exports.name = "Harry";
