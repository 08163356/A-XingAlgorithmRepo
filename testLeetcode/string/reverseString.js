/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * https://leetcode.cn/problems/reverse-string/solutions/439034/fan-zhuan-zi-fu-chuan-by-leetcode-solution/
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。
 *
 * 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 */
let s =["H","a","n","n","a","h"]
    // ["h","e","l","l","o"]

var reverseString = function(s) {
    if(s.length ===0){ return s }
    let begin = 0, end = s.length - 1
    while(begin !== end && end - begin >0){
        console.log(begin, end)
        const temp = s[begin]
        s[begin++] = s[end]
        s[end--] = temp
    }
    return s
};
//方法2
var reverseString2 = function(s) {
    const n = s.length
    for (let left = 0, right = n-1; left < right;){
        [s[left], s[right]] = [s[right], s[left]]
        left++
        right--
    }
    return s
};
console.log(reverseString2(s))