const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./Path_Module/first.txt", "utf8");
const second = readFileSync("./Path_Module/second.txt", "utf8");

writeFileSync(
  "./Path_Module/result.txt",
  `Here is the result: ${first},${second}\n`,
  { flag: "a" },
);

console.log(first, second);
