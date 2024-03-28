
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * https://leetcode.cn/problems/remove-element/description/
 */
let testCase= [
    [[3,2,2,3], 3],
    [[0,1,2,2,3,0,4,2], 2]
]
 const removeElement = function(nums, val) {
    // let count = nums.length
    // for(let i = 0; i<nums.length; i++){
    //     if(nums[i] === val){
    //         if(i < nums.length - 1){
    //             for(let j = i+1; j <nums.length; j++ ){
    //                 nums[i] = nums[j]
    //             }
    //         }
    //
    //         count--
    //     }
    // }
    // return nums
     let k = 0;
     for(let i = 0;i < nums.length;i++){
         if(nums[i] != val){
             nums[k++] = nums[i]
         }
     }
     return nums;
};
for(let i = 0; i<testCase.length; i++){
    console.log(`this is case${i},and the res is ${removeElement(testCase[i][0], testCase[i][1])}`)
}
