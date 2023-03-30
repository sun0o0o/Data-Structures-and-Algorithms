// 2차원 배열 만들기
Array.matrix = function (numrows, numcols, initial) {
  let arr = [];
  for (let i = 0; i < numrows; ++i) {
    let columns = [];
    for (let j = 0; j < numcols; ++j) {
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
};

let nums = Array.matrix(5, 5, 0);
console.log("nums: ", nums);
// nums:  [
//     [ 0, 0, 0, 0, 0 ],
//     [ 0, 0, 0, 0, 0 ],
//     [ 0, 0, 0, 0, 0 ],
//     [ 0, 0, 0, 0, 0 ],
//     [ 0, 0, 0, 0, 0 ]
//   ]

let names = Array.matrix(3, 3, "");
names[1][2] = "Joe";
console.log(names[1][2]); // Joe
console.log(names); // [ [ '', '', '' ], [ '', '', 'Joe' ], [ '', '', '' ] ]
