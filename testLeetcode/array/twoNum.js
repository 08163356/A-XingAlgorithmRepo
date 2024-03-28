/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 *
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 *
 * 你可以按任意顺序返回答案。
 * https://leetcode.cn/problems/two-sum/
 */

var twoSum = function(nums, target) {
    let tag = false
    let end = 0
    for(let begin = 0; begin < nums.length; begin++){
        end = begin + 1
        while (end < nums.length){
            // console.log(end, item, item + nums[end]===6)
            if(nums[begin] + nums[end] === target){ return [begin, end] }
            end++
        }
    }
};
var twoSum1 = function(nums, target) {
    let numMap = new Map()
    for (let i = 0; i < nums.length; i++){
        if(numMap.has(target - nums[i])){
            return [numMap.get(target - nums[i]), i]
        } else {
            numMap.set(nums[i], i)
        }
    }
    return []
};


console.log(twoSum([3, 3], 6))