//CommonJs, every file is a module (by default)
//Module - Encapsulated Code (only share minimum)

const names = require("./3-module_1");
const sayHi = require("./3-module_2");

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);
