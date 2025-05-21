/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const a= s.split("")
    
    for(i=0;i<a.length;i++){
       if(s.indexOf(s[i])==s.lastIndexOf(s[i]))
{return i
        }
    }
    return -1
};