const lodash = require("lodash");
const nums = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];

const sortedNums = lodash.sortBy(nums);
console.log(sortedNums);

const oddNums = lodash.filter(nums, (num) => num % 2 == 1);
console.log(oddNums);

const maxNum = lodash.max(nums);
console.log(maxNum);

const debouncedAdd = lodash.debounce((a, b) => {
  console.log(a + b);
}, 500);

debouncedAdd(1, 2);
debouncedAdd(3, 4);
debouncedAdd(5, 6);