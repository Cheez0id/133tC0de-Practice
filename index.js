// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

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


twoSum(nums, target);

//I think i need a for loop to run through the given array; I need to add two numbers in the array to meet the target, then return which indicies they are.
//thought: can i do 2 for loops to find 2 indicies? I don't think I should have to.

// // Write a function that takes in an integer and outputs the sum of all the numbers from 1 to that integer.

// // Ex:
// // Input: 2
// // Output: 3 (because 1 + 2 = 3)

// // Input: 4
// // Output: 10  (because 1 + 2 + 3 + 4 = 10)

// // Input: 10
// // Output: 55

// // Create a function as per instructions
// // Added a SINGLE PARAMETER given that it said "takes in an integer"
// function sumOfAllNumbers(int) {
// 	// add from 1 -> that integer and display it.
// 	// Created a variable to store the total integers added
// 	var totalSum = 0;
// 	// Created a for loop that will begin at the value of 1 and then end at the parameter input
// 	for (var i = 1; i <= int; i++) {
// 		// console.log(i);
// 		// totalSum = totalSum + i;
// 		// Reassigned to that existing variable of totalSum + the i.
// 		totalSum += i;
// 		// console.log(totalSum);
// 	}
// 	// Console.logs the totalSum value at the END of the loop
// 	// LOOK UP RETURN STATEMENT AND WHAT IT DOES IF YOU WANT TO GET AHEAD :^)
// 	console.log(totalSum);
// };
// sumOfAllNumbers();
