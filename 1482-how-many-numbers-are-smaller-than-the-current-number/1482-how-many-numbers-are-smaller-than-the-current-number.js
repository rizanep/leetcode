/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const res=[]
    let n=0
    for(i=0;i<nums.length;i++){
        for(j=0;j<nums.length;j++){
            if(i==j){
                continue
            }if(nums[i]>nums[j]){
                n+=1
            }
        }res.push(n)
        n=0
    }return res
};