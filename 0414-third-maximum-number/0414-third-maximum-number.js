/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const result=[]
    const a= nums.sort((a,b)=> b-a)
    let map=new Map()
    for(i=0;i<a.length;i++){
        map.set(a[i])
    }
    let c=map.keys()
    if(map.size<3){
         
    return c.next().value
    }

    c.next().value
    c.next().value
    
   return (c.next().value);
};