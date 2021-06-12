
function sockMerchant( ar) {
    // Write your code here
    let obj = {}
    let howMany = 0
    for(const count of ar){
        if(obj[count]){
            obj[count]+=1
            howMany++
        }else{
            obj[count] = 1
            
        }
    }
    let counter= []
    Object.values(obj).map(x =>{
        if(x > 1){
         counter.push(x/2)
         
        }
    })
    return counter.reduce((a, b) => a + b, 0)
}

console.log(sockMerchant([4,5,5,5,6,6,4,1,4,4,3,6,6,3,6,1,4,5,5,5]))