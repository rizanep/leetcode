/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const che=[]
    const res=[]
    const map =new Map()
    for(i=1;i<=nums.length;i++){
            che.push(i)
    }
for(j=0;j<nums.length;j++){
    map.set(nums[j])
    }
    for(k=0;k<che.length;k++){
        if(map.has(che[k])){
           true
        }else{
            res.push(che[k])
        }
    }
    return res
};