/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let k=0
    const res=[]
    for(i=0;i<nums.length;i++){
        if(nums[i]==1){
            k++
        }else{
            res.push(k)
            k=0
        }
        if(i==nums.length-1){
            res.push(k)
        }
    }const a= res.sort((a,b)=>b-a)
    return a[0]
};