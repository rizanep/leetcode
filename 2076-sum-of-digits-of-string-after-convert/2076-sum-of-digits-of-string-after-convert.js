/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let res=[]
    for(i=0;i<s.length;i++){
        res.push(s.charCodeAt(i)-96)
    }
    let m=res.join("")
    let n
    for(j=0;j<k;j++){
       n=Array.from(String(m))
        m=n.reduce((a,b)=>Number(a)+Number(b))
       
    }return Number(m)
};