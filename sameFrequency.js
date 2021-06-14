function sameFrequency(num1, num2){
    let first = num1.toString()
    let second = num2.toString()
    
    let counter = {}
    
    for(const num of first){
        counter[num] ? counter[num] +=1 : counter[num] =1
    }
    
    for(const num of second){
        if(!counter[num]){
            return false
        }else{
            counter[num]-=1
        }
    }
 return true
}

sameFrequency(182, 281)