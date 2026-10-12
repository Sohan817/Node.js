console.log("Waiter:order received");

setTimeout(() => {
  console.log("Food ready");
}, 2000);

fetch("https://jsonplaceholder.typicode.com/todos/1").then(() => {
  console.log("Data received");
});

Promise.resolve().then(() => console.log("Quick billing done"));

console.log("Waiter:order served");
