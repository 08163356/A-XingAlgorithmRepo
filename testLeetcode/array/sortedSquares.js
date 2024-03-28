
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * https://leetcode.cn/problems/squares-of-a-sorted-array/
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序
 */
let testCase= [
    [-4,-1,0,3,10],
    [-7,-3,2,3,11]
]
const removeElement = function(nums) {
    let begin = 0
    let end = nums.length - 1
    let saveIdx = nums.length - 1
    let sortedArray = new Array(nums.length).fill(0)
    while (begin <= end){
        if(nums[begin]*nums[begin] > nums[end]*nums[end]){
            sortedArray[saveIdx] = nums[begin]*nums[begin]
            saveIdx--
            begin++
        } else {
            sortedArray[saveIdx] = nums[end]*nums[end]
            saveIdx--
            end--
        }
    }
    return sortedArray

};
for(let i = 0; i<testCase.length; i++){
    console.log(`this is case${i},and the res is ${removeElement(testCase[i])}`)
}
