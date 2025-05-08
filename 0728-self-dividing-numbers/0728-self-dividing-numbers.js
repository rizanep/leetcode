/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const set=[]
    
    for(i=left;i<=right;i++){
        let a=i.toString()
        let k=0
        for(j=0;j<a.length;j++){
            if(i%a[j]==0){
                 k+=1
            }else{break}
            if(k==a.length){
                set.push(i)
            }
        }
    }return (set)
};