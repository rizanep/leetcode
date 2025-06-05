/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let k=Array.from(String(n)).reduce((a,b)=>a*b)
    let b=Array.from(String(n)).reduce((a,b)=>Number(a)+Number(b) )
    return k-b
};