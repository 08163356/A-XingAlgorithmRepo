
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * https://leetcode.cn/problems/minimum-size-subarray-sum/description/
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 *
 * 找出该数组中满足其总和大于等于 target 的长度最小的 连续
 * 子数组
 *  [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 */
let testCase= [
    [7, [2,3,1,2,4,3]],
    [4, [1,4,4]],
    [11, [1,1,1,1,1,1,1,1]]
]
const minSubArrayLen = function(target, nums) { //6/21
    if(nums.includes(target)){ return 1 }
    let begin = 0
    let end = 1
    while (begin <= nums.length - 1 && end <= nums.length - 1){
        let sum = 0
        for(let i = begin; i <= end; i++){
            sum += nums[i]
        }
        if(sum < target){ end++ }
        else if(sum > target ){ begin++ }
        else { return end - begin }
    }
    return 0
};

const minSubArrayLen1 = function(target, nums) { //6/21
    if(nums.includes(target)){ return 1 }
    let begin = 0
    let end = 1
    while (begin <= nums.length - 1 && end <= nums.length - 1){
        let sum = 0
        for(let i = begin; i <= end; i++){
            sum += nums[i]
        }
        if(sum < target){ end++ }
        else if(sum > target ){ begin++ }
        else { return end - begin }
    }
    return 0
};
for(let i = 0; i<testCase.length; i++){
    console.log(`this is case${i},and the res is ${minSubArrayLen(testCase[i][0], testCase[i][1])}`)
}

