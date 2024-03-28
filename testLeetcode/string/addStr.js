/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
 *
 * 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
 * https://leetcode.cn/problems/add-strings/submissions/513245923/
 */
var addStrings = function(num1, num2) {
    let n1Len = num1.length - 1, n2Len = num2.length - 1
    let add = 0
    let ans = []
    while(n1Len >= 0 || n2Len >= 0 || add !=0){
        let n1 = n1Len >= 0 ? num1.charAt(n1Len) - "0" : 0
        let n2 = n2Len >= 0 ? num2.charAt(n2Len) - "0" : 0
        const res = n1 + n2 + add
        ans.push(res % 10)
        add = Math.floor(res / 10)
        n1Len--
        n2Len--
    }
    return ans.reverse().join('')
};