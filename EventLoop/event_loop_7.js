function three() {
  console.log("three");
  setTimeout(() => {
    console.log("Last");
  }, 1000);
}
function two() {
  console.log("two");
  three();
}
function one() {
  console.log("one");
  two();
}

one();
