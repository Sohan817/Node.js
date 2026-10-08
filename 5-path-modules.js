const path = require("path");

//separator
console.log(path.sep);

//join paths
const filePath = path.join("/Path_Module", "subfolder", "test.txt");

console.log(filePath);

//base name
const base = path.basename(filePath);
console.log(base);

//absolute path
const absolute = path.resolve(
  __dirname,
  "Path_Module",
  "subfolder",
  "test.txt",
);
console.log(absolute);
