/**
 * @param {string} s
 * @return {string}
 * https://leetcode.cn/problems/reverse-words-in-a-string/submissions/513053714/
 */
let s =  "the sky is blue"
var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(" ")
};
var reverseWords1 = function(s) {
    return s.trim().split(/\s+/).reverse().join(" ")
};
reverseWords(s)