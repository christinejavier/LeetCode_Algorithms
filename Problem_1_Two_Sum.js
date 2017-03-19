//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//Example:
//Given nums = [2, 7, 11, 15], target = 9,
//Because nums[0] + nums[1] = 2 + 7 = 9,
//return [0, 1].

var twoSum = function(nums, target) {
  var map = {},
      i,
      length = nums.length,
      value,
      neededValue,
      result = [];

  for(i = 0; i < length; i++) {
      value = nums[i];
      neededValue = target - value;
      if (neededValue in map) {
          result.push(map[neededValue]);
          result.push(i);
          break;
      } else {
          map[value] = i;
      }
  }
  return result;
};

console.log(twoSum([0, 4, 3, 0], 0));
