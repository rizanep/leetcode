/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let k=/^[a-z0-9]+$/
    let a=s.toLowerCase()
    const b=[]
    let res 
    for(i=0;i<a.length;i++){
        if(k.test(a[i])){
            b.push(a[i])
        }
    }
    if(!b.length){return true}
    const c= b.reverse()
    for(j=0;j<b.length;j++){
        if(b[j]!=c[c.length-1-j]){
            return false
        }else{ res=true}
    }return res
};