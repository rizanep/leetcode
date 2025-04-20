/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
   let a = []

    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            a.pop();
        } else a.push(s[i])
    }

    return a.join("");
};