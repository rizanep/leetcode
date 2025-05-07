/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let resa=true
    let resd=true
    const sorteda= nums.toSorted((a,b)=> b-a)
    const sortedb=nums.toSorted((a,b)=> a-b)
    for(i=0;i<nums.length;i++){
        if(nums[i]!=sorteda[i]){
            resa=false
        }if(nums[i]!=sortedb[i])
           resd=false
    }return resa || resd
};