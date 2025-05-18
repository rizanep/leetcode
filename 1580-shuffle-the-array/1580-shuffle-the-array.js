/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const res=[]
    let k=nums.length/2
    const a=nums.slice(0,k)
    const b=nums.slice(k)
    for(i=0;i<k;i++){
        res.push(a[i])
        res.push(b[i])
    }return res
    
};