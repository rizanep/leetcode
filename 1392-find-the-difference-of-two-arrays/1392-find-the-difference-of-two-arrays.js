/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const a= new Set(nums1)
    const b= new Set(nums2)
    nums1=[...a]
    nums2=[...b]
    for(i=0;i<nums1.length;i++){
        if(b.has(nums1[i])){
            b.delete(nums1[i])
        }
    }
     for(j=0;j<nums2.length;j++){
        if(a.has(nums2[j])){
            a.delete(nums2[j])
        }
     }return [[...a],[...b]]
};