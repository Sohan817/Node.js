const { createReadStream } = require("fs");

const stream = createReadStream("./Path_Module/big.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});
stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => {
  console.log(err);
});

//default 64kb
//last buffer - remainder
//highWaterMark - control size
//const stream = createReadStream("./Path_Module/big.txt", { highWaterMark: 90000 });
//const stream = createReadStream("./Path_Module/big.txt", { encoding: "utf8" });
