// import { multiply } from "./function";
const multiply = require("./function");
const numberConst = 10;
let numberLet = 3;
var numberVar = 7;
numberVar += numberLet;
numberLet += numberConst;
const x = multiply(numberConst, numberLet);
// numberConst += numberLet;
console.log(x);