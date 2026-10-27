const http = require("http");
const { readFileSync } = require("fs");
const homepage = readFileSync("./Express.js/index.html");

const server = http.createServer((req, res) => {
  //res.writeHead(200, { "content-type": "text/plain" });
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homepage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About...</h>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Not found...</h>");
    res.end();
  }
});

server.listen(5000);
