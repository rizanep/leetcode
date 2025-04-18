/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const result=[]
    for(i=0;i<n;i++){
        if((i+1)%3==0&&(i+1)%5==0){
            result.push("FizzBuzz")
        }else if((i+1)%3==0){
            result.push("Fizz")
        }else if((i+1)%5==0){
            result.push("Buzz")}
            else{
            result.push((i+1).toString())
        }
    }return result
};