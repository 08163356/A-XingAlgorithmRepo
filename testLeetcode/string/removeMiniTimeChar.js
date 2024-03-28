function removeMinTimeStr(str){
    let charCount = {};
    for(let i = 0; i < str.length; i++){
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1
    }
    let miniCount = Infinity
    for(const char in charCount){
        if(charCount[char] < miniCount){
            miniCount = charCount[char]
        }
    }
    let res = ""
    for(let i = 0; i < str.length; i++){
        const char = str[i]
        if(charCount[char] !== miniCount){ res += char }
    }
    return res
}
console.log(removeMinTimeStr("aabbccd"))