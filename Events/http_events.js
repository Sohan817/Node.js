const http = require("http");

//Using the event emitter API
const server = http.createServer();

//Emitting events on the server object
//subscribe to an event/listen for an event/respond to an event

server.on("request", (req, res) => {
  res.end("Welcomes");
});
server.listen(5001);
