/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   const a= s.split(" ")
   let n
   for(i=a.length-1; i>=0;i--){
    if((a[i].length)==0){
        n++
    }else{return (a[i].length)}
   }
};