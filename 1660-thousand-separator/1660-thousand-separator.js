/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    if (n<1000)
        return n.toString();
    let arr = Array.from(String(n));
    for (let i=3; i<arr.length; i+=4) {
        arr.splice(arr.length-i, 0, '.');
    }
    return arr.join("");
};