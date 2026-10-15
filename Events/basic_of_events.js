const EventEmitter = require("events");

const customEmitter = new EventEmitter();
customEmitter.on("response", (name, age) => {
  console.log("data received ! name: " + name + " age: " + age);
});
customEmitter.on("response", () => {
  console.log("Some other logic here");
});

customEmitter.emit("response", "john", 34);
