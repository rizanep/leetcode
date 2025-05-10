/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const o=[]
    const a=nums
    let k=0
    for(i=0;i<nums.length;i++){
        for(j=0;j<a.length;j++){
            if(nums[i]==a[j]){
                k++
               if(k==2) {
                o.push(nums[i])
               }
            }
        }k=0
    }
    for(m=0;m<nums.length;m++){
        if(nums[m]!=o[m]){
            return nums[m]
        }
    }
};