/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    const set= new Set(arr)
    let a=0
    for(i=1;i<10000;i++){
        if(!set.has(i)){
            k--
            if(k==0){
                return i
            }else {continue}
        }
    }
};