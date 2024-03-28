/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 *
 * 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
 *
 *
 */
// let s = "rat", t = "car"
let s = "anagram", t = "nagaram"
//self
var isAnagram = function(s, t) {
    s = s.split('')
    t = t.split('')
    let tIdx = 0
    for (let i = 0; i < s.length; i++){
        tIdx = 0
        console.log(s, t)
        while (tIdx < t.length){

            if(typeof s[i] == "number" && typeof t[tIdx] == "number" && s[i] === t[tIdx]){ delete t[tIdx]; delete s[i]; break}
            tIdx++
        }
    }
    return t.filter((item) => {
        typeof item == "number"
    }).length === 0
};
function isAnagram1(s, t){
    return s.length === t.length && [...s].sort().join('') === [...t].sort().join('')
}
console.log(isAnagram(s, t))