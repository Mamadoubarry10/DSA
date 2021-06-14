function averagePair(arr, num){
    // add whatever parameters you deem necessary - good luck!
    let m = 0
    let v = arr.length -1
    
    while(m <v){
    if((arr[m] +arr[v])/2 ===num){
    return true
    
    }else if((arr[m] +arr[v])/2 > num){
     v--
    }else{
    m++
  }
  
  }
  return false
  }
  
  console.log(averagePair([1,3,3,5,6,7,10,12,19], 8))