const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Welcome Home");
  }
  if (req.url === "/about") {
    //Blocking Code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 100; j++) {
        console.log(`${i} ${j}`);
      }
    }
    return res.end("Welcome to the about page");
  }
  return res.end("Error");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
