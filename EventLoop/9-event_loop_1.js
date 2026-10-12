console.log("First");

console.time();

for (let i = 0; i < 1000000000; i++) {}
console.timeEnd();

console.log("Last");
