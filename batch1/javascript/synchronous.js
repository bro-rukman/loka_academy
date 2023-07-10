async function a() {
  console.logs("hello");
}
function b() {
  console.log("world");
}

async function logAll() {
  await a()
    .then(() => {
      b();
    })
    .catch((err) => {
      console.log(err);
    });
}
logAll();
// console.log(
//   a().then(() => {
//     console.log(b());
//   })
// );
// console.log(b());
