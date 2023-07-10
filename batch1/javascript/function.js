//function
function multiply(number1, number2) {
  return number1 * number2;
}
module.exports = { multiply };
// const x = multiply(5, 6);
// const y = multiply(7, 3);
// console.log(x);
// console.log(y);

const funcHello = (name) => {
  if (name === 5) {
    return `hello ${name}`;
  } else {
    return "salah";
  }
};
console.log(funcHello(6));
