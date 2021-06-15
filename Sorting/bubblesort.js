// it  basically swap the index and loopthrough every element!
    // const swapfunction = (value1, value2) => {

    // }
const bubbleSort = (SortArry) => {
    for(let i = 0; i < SortArry.length; i++) {
        for(let j = 0 ; j < SortArry.length; j++) {
            if(SortArry[j] > SortArry[j+1]) {
                // const temp = SortArry[j]
                // SortArry[j] = SortArry[j+1]
                // SortArry[j+1] = temp;
                [SortArry[j], SortArry[j+1]] = [SortArry[j+1], SortArry[j]];
            }
        }
    }
    return SortArry;
}

console.log(bubbleSort([50, 1, 2,5,47,10]))