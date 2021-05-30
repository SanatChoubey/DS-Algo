//  Problem anagram of word and check it is same work in two different string!
// cinema, iceman true

//  worst case approach!
// O(n**2)

function anagramCheck (str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    for(char1 of str1){
        let index = -1;
        const data = checkFunctionforIndex(str2,char1)
        console.log('ind', data);
        if(data === -1) {
            return false
        }
        
    }
    return true;
}
const  checkFunctionforIndex = (str, char) =>{
    for(let i =0; i<=str.length; i++){
        if(str[i] === char){
            return i
        }
        if(str[i] !== char &&str.length === i){
            return -1
        }
    }
}
console.log(anagramCheck('kreab','breek'));