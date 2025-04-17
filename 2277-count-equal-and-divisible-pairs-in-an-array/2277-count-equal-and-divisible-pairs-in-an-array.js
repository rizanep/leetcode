/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let m=0
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            let n=i*j
            if(nums[i]==nums[j]&&n%k==0){
                m++
            }
        }
    }return m
};