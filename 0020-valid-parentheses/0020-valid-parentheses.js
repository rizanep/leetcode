/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
      const x = [];
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s.charAt(i);
        switch(c) {
            case '(': x.push(')');
                break;
            case '[': x.push(']');
                break;
            case '{': x.push('}');
                break;
            default:
                if (c !== x.pop()) {
                    return false;
                }else{true}
        }
    }
    
    return x.length === 0;
};
