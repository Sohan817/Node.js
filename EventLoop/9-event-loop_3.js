const { readFile, writeFile } = require("fs");
console.log("Start the task");
readFile("./Path_Module/first.txt", "utf8", (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(result);
  console.log("Completed the first task");
});

console.log("Last the task");
