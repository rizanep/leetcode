/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let res=new Set()
    for(i=0;i<words.length;i++){
        for(j=0;j<words.length;j++){
            if(i==j||words[i]==words[j]){
                continue
            }
            if(words[j].includes(words[i])){
                res.add(words[i])
            }
        }
    }return Array.from(res)
};