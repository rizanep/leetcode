/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    const res=[]
    for(i=0;i<words.length;i++){
        
        res.push(words[i].split(separator))
    } 
    return res.flat().filter((a)=>a.length>=1)
    
};