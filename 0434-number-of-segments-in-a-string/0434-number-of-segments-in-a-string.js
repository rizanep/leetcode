/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let k=0
    let a=s.trim()
    if(a.length){
        k+=1
    }
    for(i=0;i<a.length;i++){
        if(a[i]==" "&&a[i-1]!=" "){
            k+=1
        }
    }return k
};