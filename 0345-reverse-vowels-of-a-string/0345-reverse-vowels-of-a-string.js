/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
   let c="aeiouAEIOU" 
   const res=[]
   const vow=[]
   for(i=0;i<s.length;i++){
    if(c.includes(s[i])){
        vow.push(s[i])
    }
   }
   vow.reverse()
   for(j=0;j<s.length;j++){
    if(!c.includes(s[j])){
        res.push(s[j])
    }else{res.push(vow[0]);
    vow.shift()}
   }return res.join("")
};