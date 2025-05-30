/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let a=nums.length
    for(i=0;i<a;i++){
        nums.push(nums[i])
    }return nums
};