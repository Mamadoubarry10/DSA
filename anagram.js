
function validAnagram(str, str2){
    if(str.length !== str2.length){
        return false
    }
    let obj = {}
    
    for(const el of str){
       let counter = el
       
       obj[counter] ? obj[counter] += 1 : obj[counter] = 1 
       
    }
    
    for(const el of str2){
        if( !obj[el] ){
         
            return false
        
        }else{
            obj[el] -=1
        }
    }
    console.log(obj)
    
  }


  validAnagram('anagram', 'nagaram')