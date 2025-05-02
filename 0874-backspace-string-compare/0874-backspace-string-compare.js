/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const check = (str) => {
        const res = []
        for (i=0;i<str.length;i++) {
            if (str[i]=='#') {
                if(res.length)
               res.pop();
            } else {
                res.push(str[i])
            }
        } return res.join('')
    };return check(s)==check(t)
};