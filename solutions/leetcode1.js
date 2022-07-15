
//Leetcode 1. Two Sum - Javascript (https://leetcode.com/problems/two-sum/)

let nums = [3,2,4];
let target = 6;

let twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (x = 0; x < nums.length; x++) {
      if ((nums[i] + nums[x] == target) && (i !== x)) {
          console.log([i, x]);
		  return [i, x]

      } 
    } 
  } 
};

// let example = "meow";
// let example2 = "meowwolf";

module.exports = {twoSum, nums, target};
// module.exports = [example, example2]


// Runtime: 408 ms, faster than 5.01% of JavaScript online submissions for Two Sum.
// Memory Usage: 43.1 MB, less than 29.84% of JavaScript online submissions for Two Sum.

