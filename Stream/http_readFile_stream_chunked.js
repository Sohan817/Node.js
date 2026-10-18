const http = require("http");
const fs = require("fs");
const server = http.createServer();

server.on("request", (req, res) => {
  //*Read File*
  //   const text = fs.readFileSync("./Path_Module/big.txt", "utf8");
  //   res.end(text);
  //Read file stream
  const text = fs.createReadStream("./Path_Module/big.txt", "utf8");
  text.on("open", () => {
    text.pipe(res);
  });
  text.on("error", (error) => {
    res.end(error);
  });
});

server.listen(5000, () => {
  console.log("Server listen at 5000");
});
