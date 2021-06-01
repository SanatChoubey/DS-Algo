// find 6 in array .
const linearData  = [1,2,3,4,5,6,7];
const searchLinear = () => {
    for(let i = 0; i<linearData.length; i++) {
        if(linearData[i] === 6) {
            return i;
        }
    }
    return -1;
}
const indexofData = searchLinear();
console.log('indexofData ->', indexofData);