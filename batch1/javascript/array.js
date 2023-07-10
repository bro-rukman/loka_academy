//array
// const dataSingle = [1, 2, 3, 4, "halo", true];
const data = new Array(1, 3, 5, 7, 9, 10, 20, 30);

//object
const objData = {
  a: 1,
  b: 2,
  c: 1,
};

// for
// for (let i = 0; i < data.length; i++) {
//   console.log(data[i]);
// }
// console.log(data.length);
//for of
// for (let i of data) {
//   console.log(i);
// }
// for in
// for (let i in data) {
//   console.log(i);
// }
// map
// data.map((item, index) => {
//   // console.log(item);
//   console.log(index);
// });
//forEach
// data.forEach((item, index) => {
//   // console.log(item);
//   console.log(index);
// });
//while
// let i = 0;
// while (i < data.length) {
//   console.log(data[i]);
//   i++;
// }
// const dataSecond = data[3];
// const dataLast = data[7];
const dataLast = data[data.length - 1];
const dataFirst = data[1];

console.log(dataFirst);
console.log(dataLast);
