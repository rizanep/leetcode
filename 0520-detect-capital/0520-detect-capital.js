/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let a=/^[a-z]+$/
    let b=/^[A-Z]+$/
    if(a.test(word)){
        return true
    }
    if(b.test(word)){
        return true
    }
    if(b.test(word[0])){
        let k=word.slice(1,word.length)
        if(a.test(k)){
            return true
        }else{ return false}
    }else{return false}
};