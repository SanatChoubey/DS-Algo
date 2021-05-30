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

//  better approach not to use nested loop instead of it change it to breakdown the strcuture.

const managewithfrequencyCounter  = (str1, str2) => {
    if(str1.length !== str2.length) {
        return false;
    }
    var obj1 = {};
    var obj2 = {};
    for(char of str1 ){// O(n)
        obj1[char] = obj1[char]? obj1[char]+1 : 1;
    }
    // O(n)
    for(char2 of str2){
        obj2[char2] = obj2[char2]? obj1[char2]+1 : 1;
    }
    // objec like => {i:1,c:1,m:1,a:1,n:1} /=> {i:1,c:1,m:1,a:1,n:1}
    console.log('obejc', obj1, obj2);
    // O(n)
    for(key in obj1) {
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}
// O(n) + O(n) + O(n) => O(3n) => O(n)
console.log(managewithfrequencyCounter('break','kreab'));