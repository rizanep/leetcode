/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const res=[]
    const j=s.split(" ")
    for(i=0;i<j.length;i++){
        let k=j[i].slice(-1)
        res[k]=j[i].slice(0,-1)
    }
    return res.join(" ").trim()
};