//deep copy를 해보아요
function copy(arr1, arr2) {
  for (let i = 0; i < arr1.length; ++i) {
    arr2[i] = arr1[i];
  }
}

let nums = [];
for (let i = 0; i < 100; ++i) {
  nums[i] = i + 1;
}
let samenums = [];
copy(nums, samenums);
nums[0] = 400;
console.log(samenums[0]); //1
