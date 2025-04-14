/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i=0
  let n=1
  while(n<nums.length){
    if(nums[i]===0&& nums[n]!==0){
        nums[i]=nums[n]
        nums[n]=0
        i++
    }if(nums[i]!==0){
        i++
    }n++
  } return nums
};