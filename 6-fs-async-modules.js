const { readFile, writeFile } = require("fs");
//read and write file async always use callback function to handle the result of the operation
readFile("./Path_Module/first.txt", "utf8", (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  const first = result;
  readFile("./Path_Module/second.txt", "utf8", (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    const second = result;
    writeFile(
      "./Path_Module/result.txt",
      `Here is the result: ${first},${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.error(err);
          return;
        }
      },
    );
  });
});
