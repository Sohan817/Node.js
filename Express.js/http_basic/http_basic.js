const http = require("http");
const { readFileSync } = require("fs");
const homepage = readFileSync("./Express.js/navbar-app/index.html");
const homepageCss = readFileSync("./Express.js/navbar-app/styles.css");
const homepageImage = readFileSync("./Express.js/navbar-app/logo.svg");
const homepageLogic = readFileSync("./Express.js/navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  //res.writeHead(200, { "content-type": "text/plain" });
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homepage);
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homepageCss);
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homepageImage);
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homepageLogic);
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
