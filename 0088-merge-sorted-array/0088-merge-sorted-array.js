/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let k=nums1.length-m
    for(i=k; i>0; i--){
        nums1.pop()
    }
    for(j=0;j<n;j++){
        nums1.push(nums2[j])
    }return nums1.sort((a,b)=> a-b)
};