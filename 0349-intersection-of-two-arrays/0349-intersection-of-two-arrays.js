/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const res=[]
   const set1=new Set()
    const set2=new Set()
    for(i=0;i<nums1.length;i++){
        set1.add(nums1[i])
    }
    for(j=0;j<nums2.length;j++){
        set2.add(nums2[j])
    }
    const che=Array.from(set2)
    for(k=0;k<che.length;k++){
        if(set1.has(che[k])){
            res.push(che[k])
        }
    }return res
};