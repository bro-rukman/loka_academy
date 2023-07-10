const dataArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

dataArr.map((item) => {
  if (item % 3 === 1) {
    console.log(item, true);
  } else {
    console.log(item, false);
  }
});
