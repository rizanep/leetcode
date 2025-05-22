/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const res=[]
    for(num of nums){
        res.push(nums[num])
    }return res
};