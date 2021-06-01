// Binary Search only work on sorted data !
// generally in this approach we divide and rule!

const BinarySearchFunction = (searchArray, searchValue) => {
    let startIndex = 0;
    let endIndex = searchArray.length - 1 ;
    let middleIndex = Math.floor((startIndex + endIndex) / 2 );

    while(searchArray[middleIndex] !== searchValue && startIndex <= endIndex) {
        if(searchValue < searchArray[middleIndex]) {
            endIndex = middleIndex - 1;
        }else {
            startIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((startIndex + endIndex) / 2 );
    }
    return middleIndex
}
const sortedArray = [1,2,3,4,5,6,7,8];
const findValue = 7;
console.log('Binary serach Index =>', BinarySearchFunction(sortedArray, findValue));
