/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
     
     
     let result=0
     for(i=low;i<=high;i++){
        let s=i.toString()
        let m=s.length/2
        if(s.length%2=== 1) continue;
        let sum1=0
            for(j=0; j<m;j++){
                sum1+= s.charAt(j)- s.charAt(j+m)
            }
           if(sum1===0){
                result++
                
            }
        
     }return result
};