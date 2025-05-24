/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const set1= new Set()
    const set2= new Set()

    for(i=0;i<arr.length;i++){
        if(set1.has(arr[i])){continue}
        else{
            set1.add(arr[i])
            let k=0
            for(j=0;j<arr.length;j++){
               
                    
                    if(arr[i]==arr[j]){
                        k++
                    }
                
            }if(set2.has(k)){return false}else{set2.add(k);
            k=0}
        }
    }return true
};