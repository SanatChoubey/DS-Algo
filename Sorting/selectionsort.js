const selectionAlgo = (slectionArry) => {
    
    for (let i= 0; i< slectionArry.length; i++) {
        let minindex = i; 
        for(let j = i + 1; j < slectionArry.length; j++) {
           if(slectionArry[j] < slectionArry[minindex]){
               minindex = j
           } 
        }
        var temp = slectionArry[i]
        slectionArry[i] = slectionArry[minindex];
        slectionArry[minindex] = temp
    }
    return slectionArry
}
console.log(selectionAlgo([50, 1, 2,5,47,10]))