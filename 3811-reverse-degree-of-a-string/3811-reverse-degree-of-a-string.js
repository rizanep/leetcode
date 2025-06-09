/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
let res=0
    for(i=0;i<s.length;i++){
        let k=Math.abs(s.charCodeAt(i)-123)
        res+=k*(i+1)
    }

    return res
};