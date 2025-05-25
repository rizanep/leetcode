/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let res=0
    for(i=0;i<words.length;i++){
        for(j=0;j<words[i].length;j++){
            if(!allowed.includes((words[i])[j])){
                break
            }
            if(j==words[i].length-1){
                res++
            }
        }
    }return res
};