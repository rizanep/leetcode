/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let n=arr.length
    for(i=0;i<n;i++){
        if(arr[i]===0){
            arr.splice(i,0,0)
            arr.pop()
            i++
        }
    }
};