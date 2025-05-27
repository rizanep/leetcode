/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    const res=[]
    let a=sentence.split(" ")
    let b="aeiouAEIOU"
    for(i=0;i<a.length;i++){
        
            let k=""
            if((b.includes(a[i])[0])||a[i][0]=="o"||a[i][0]=="E"||a[i][0]=="u"||a[i][0]=="a"||a[i][0]=="U"||a[i][0]=="e"||a[i][0]=="i"||a[i][0]=="I"||a[i][0]=="A"||a[i][0]=="O"){
                k=a[i]+"ma"
                for(l=0;l<=i;l++){
                    k+="a"
                }res.push(k);
                
            }else{
                let k=a[i].slice(1)+a[i].slice(0,1)+"ma"
                for(l=0;l<=i;l++){
                    k+="a"
                }res.push(k);
            }
        
    }return res.join(" ")
};