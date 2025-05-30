/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let k= word.indexOf(ch)
    const res=[]
    for(i=0;i<word.length;i++){
        if(i<=k){
            res.unshift(word[i])
        }else{
            res.push(word[i])
        }
    }return res.join("")
};