/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const result=[]
    for(i=0;i<nums.length; i++){
        if(i===0){
            result.push(nums[i])
        }else{
            result.push(nums[i]+result[i-1])
        }
    }return result
};