/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let res=s
    const map= new Set()
    for(i=0;i<res.length;i++){
       if(!isNaN(res[i])){
            map.add(Number(res[i]))
        }
    }
    const sorted = Array.from(map).sort((a, b) => b - a);


    return sorted.length >= 2 ? sorted[1] : -1;
};