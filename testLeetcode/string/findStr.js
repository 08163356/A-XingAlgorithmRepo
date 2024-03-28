/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。
 * https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/submissions/513056735/
 */
let haystack = "sadbutsad", needle = "sad"
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};

var strStr1 = function(haystack, needle) {
    if(haystack.length < needle.length){ return -1 }
    let hIdx = 0, nIdx = 0
    while (hIdx <= haystack.length){
        nIdx = haystack[hIdx] === needle[nIdx] ? nIdx + 1 : 0
        hIdx++
        if(nIdx === needle.length - 1){ return hIdx }
    }
    return -1
};
console.log(strStr1(haystack, needle))