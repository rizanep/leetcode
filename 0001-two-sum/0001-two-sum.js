/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} answer
 */
var twoSum = function(nums, target) {
    const numMap = {}; // Key: number, Value: its index
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        
        if (complement in numMap) {
            return [numMap[complement], i];
        }
        
        numMap[num] = i;
    }
    
    return []; 
}