//get the event module
//if want custom extend from class
//otherwise can use the event module directly

const EventEmitter = require("events");

const customEmitter = new EventEmitter();

//on and emit are the two methods of the event emitter class
//on is used to listen for an event
//emit is used to emit an event
//keep track of the order of the events, the order of the events is important
//if the event is emitted before the listener is registered, the listener will not be called
//additional arguments can be passed to the listener function when the event is emitted
//built-in modules like http, fs, etc. are also event emitters
customEmitter.on("response", (name, age) => {
  console.log("data received ! name: " + name + " age: " + age);
});
customEmitter.on("response", () => {
  console.log("Some other logic here");
});

customEmitter.emit("response", "john", 34);
