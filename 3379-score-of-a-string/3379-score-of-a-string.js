/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let sum=0
   for(i=0;i<s.length-1;i++){
    let sum1=Math.abs(s.charCodeAt(i)-s.charCodeAt(i+1))
    sum+=sum1
   }return (sum)
};