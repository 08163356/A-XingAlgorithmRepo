/**
 * @param {number} n
 * @return {number}
 *
 * https://leetcode.cn/problems/climbing-stairs/
 */
//time out
var climbStairs = function(n) {
    if(n === 1){
        return 1
    }
    if(n === 2){
        return 2
    }
    return climbStairs(n - 1) + climbStairs(n - 2)
};
var climbStairs1 = function(n) {
    if(n === 1){ return 1 }
    let first = 1, second = 2
    for(let i = 3; i <= n; i++){
        let third = first + second
        first = second
        second = third
    }
    return second
};