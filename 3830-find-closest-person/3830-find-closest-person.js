/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let n
    let m
    if(z<y){
        n=y-z
    }else {
        n=z-y
    }
    if(z<x){
        m=x-z
    }else{m=z-x}

    if(m==n){
        return 0
    }else if(n>m){return 1}else{return 2}
};