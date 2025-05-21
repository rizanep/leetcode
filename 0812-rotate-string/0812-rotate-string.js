/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let res = false
    const a= Array.from(s)
    for(i=0;i<goal.length;i++){
        a.push(a[0])
        a.shift()
       let k= a.join("")
        if(goal==k){
            res=true
        }
    }return res


};