/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const res=[]
    for(i=0;i<nums.length;i++){
        res.push(nums[i]*nums[i])
    }return res.sort((a,b)=> a-b)
};